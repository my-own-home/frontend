<script setup>
import { onMounted } from "vue";
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";

// image
import bgContact from "@/assets/img/examples/blog2.jpg";

// tooltip
import setTooltip from "@/assets/js/tooltip";

import setMaterialInput from "@/assets/js/material-input";
// store
import { useAppStore } from "@/stores";
const store = useAppStore();

onMounted(() => {
  setTooltip(store.bootstrap);
  setMaterialInput();
});
</script>
<template>
  <section class="py-lg-5">
    <div class="container">
      <div class="card box-shadow-xl overflow-hidden mb-5 px-4 pt-3">
        <div class="row">
          <div class="col list overflow-auto">
            <div v-if="favApts || favApts.length">
              <table class="table table-hover text-center">
                <colgroup>
                  <col style="width: 5%" />
                  <col style="width: 10%" />
                  <col style="width: 63%" />
                  <col style="width: 20%" />
                  <col style="width: 2%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>아파트명</th>
                    <th>주소</th>
                    <th>최근 거래가</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody v-for="(favApt, index) in favApts" :key="index">
                  <tr>
                    <td>{{ index }}</td>
                    <td>{{ favApt.aptName }}</td>
                    <td>{{ favApt.fullJibunAddress }}</td>
                    <td>{{ $filters.price(recentPrice[0][index - 1]) }}원</td>
                    <td @click="deleteFavApt(favApt.aptCode)">
                      <a href=""><i class="material-icons">delete_forever</i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-center" v-else>관심 매물이 없습니다.</div>
          </div>
          <div class="col" style="position: relative">
            <div id="bg-map"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
const SERVICE_KEY = import.meta.env.VITE_HOUSE_MATCH_KAKAO_MAP_API_KEY;
import blueHouseMarker from "@/assets/img/profiles/blue-home.svg";
export default {
  data() {
    return {
      favApts: [],
      recentPrice: [],
      map: null,
      level: null,
      infowindow: null,
      geocoder: null,
      selectedAptMarker: null,
      aptList: [],
      markers: [],
    };
  },
  components: {
    blueHouseMarker,
  },
  watch: {
    aptList() {
      this.updateAptMarkers();
    },
  },
  methods: {
    getFavAptList() {
      this.$axios
        .get("http://localhost:8080/api/user/interest/apts", {
          params: { pgno: 1, userId: "ssafy" },
        })
        .then((res) => {
          this.favApts = res.data.aptInfos;
          this.aptList = res.data.aptInfos;
          this.recentPrice.push(res.data.recentPrice);
          updateAptMarkers();
        })
        .catch((err) => {
          if (err.message.indexOf("Network Error") > -1) {
            alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.");
          }
        });
    },

    deleteFavApt(getno) {
      console.log(getno);
      if (!confirm("삭제하시겠습니까?")) return;

      this.$axios
        .delete("http://localhost:8080/api/user/interest/apts/" + getno, {
          params: { userId: "ssafy" },
        })
        .then(() => {
          alert("삭제되었습니다.");
          this.getFavAptList();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    initMap() {
      var container = document.getElementById("bg-map");
      var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        draggable: true,
        level: 3,
      };

      var map = new kakao.maps.Map(container, options);
      // if (!this.map) {
      // }
      this.map = map;
      this.geocoder = new kakao.maps.services.Geocoder();

      // GeoLocation 사용할 수 있는 경우
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var lat = position.coords.latitude;
          var lon = position.coords.longitude;

          var locPosition = new kakao.maps.LatLng(lat, lon);
          map.setCenter(locPosition);
        });
      }

      // 확대/축소 컨트롤 생성
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      kakao.maps.event.addListener(map, "zoom_changed", function () {
        // 지도의 현재 레벨을 얻어옵니다
        this.level = map.getLevel();

        // var message = "현재 지도 레벨은 " + level + " 입니다";
        // var resultDiv = document.getElementById("result");
        // resultDiv.innerHTML = message;
      });

      var mapTypeControl = new kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    },
    makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    },
    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    },
    updateAptMarkers() {
      this.removeMarkers(this.markers);
      //aptName, buildYear, TODO: 실거래가 정보도 추가??

      for (let index = 1; index < Object.keys(this.aptList).length + 1; index++) {
        let apt = this.aptList[index];
        console.log(apt);
        var imageSrc = blueHouseMarker, // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(60, 65), // 마커이미지의 크기입니다
          imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: this.map,
          position: new kakao.maps.LatLng(apt.lat, apt.lng),
          image: new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        });

        // 마커에 표시할 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="border-radius: 10px"><div style="font-weight:bold; font-size: 14px; border-radius: 6px 6px 0 0; padding: 10px; font-family: NanumSquareNeo; color: black">${apt.aptName}</div></div>`,
        });

        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        kakao.maps.event.addListener(
          marker,
          "mouseover",
          this.makeOverListener(this.map, marker, infowindow)
        );

        kakao.maps.event.addListener(marker, "mouseout", this.makeOutListener(infowindow));

        let prethis = this;

        kakao.maps.event.addListener(marker, "click", function () {
          if (!prethis.selectedMarker || prethis.selectedMarker !== marker) {
            !!prethis.selectedMarker;
          }
          prethis.selectedMarker = marker;
          prethis.map.panTo(new kakao.maps.LatLng(apt.lat, apt.lng));
          prethis.$router.push({ name: "detail", params: { aptCode: `${apt.aptCode}` } });
        });

        this.markers.push(marker);
      }

      if (this.aptList.length > 0) {
        this.map.panTo(new kakao.maps.LatLng(this.aptList[0].lat, this.aptList[0].lng));
      }
    },
    removeMarkers(markers) {
      markers.forEach((marker) => {
        marker.setMap(null);
      });
    },
  },
  mounted() {
    this.getFavAptList();
    if (window.kakao && window.kakao.maps) {
      this.initMap();
      // if (!this.map) {
      // }
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      // if (!this.map) {
      // }
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${SERVICE_KEY}&libraries=services`;
      document.head.appendChild(script);
    }
  },
};
</script>

<style scoped>
.list {
  height: 500px;
}
.table td {
  font-size: 0.83rem;
  word-wrap: break-word;
  white-space: normal !important;
  height: auto;
  vertical-align: middle;
}
#bg-map {
  z-index: 1;
  position: sticky;
  width: 100%;
  height: 100%;
}
</style>
