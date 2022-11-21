<template>
  <div id="bg-map" class="background-map"></div>
</template>

<script>
/* global kakao */
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import restApi from "@/util/http-common.js";

const locationStore = "locationStore";

export default {
  name: "SearchMap",

  data() {
    return {
      map: null,
      geocoder: null,
      infowindow: null,
      apts: [],
      markers: [],
      mapCenter: {},
    };
  },

  props: ["searchDong", "searchKeyword"],

  computed: {
    ...mapState(locationStore, ["sidos", "guguns", "dongs"]),
  },

  watch: {
    searchDong(val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
      console.log(val);
      console.log(val !== oldVal);

      if (val) {
        this.updateAptMarkersByDong(val);
      }
    },
  },

  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=ffa79c7c49119705512bb913a7283a4f&libraries=services";
      document.head.appendChild(script);
    }
  },

  methods: {
    initMap() {
      var container = document.getElementById("bg-map");
      var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        draggable: true,
        level: 5,
      };

      var map = new kakao.maps.Map(container, options);
      this.map = map;
      this.geocoder = new kakao.maps.services.Geocoder();

      // 확대/축소 컨트롤 생성
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      kakao.maps.event.addListener(map, "zoom_changed", function () {
        // 지도의 현재 레벨을 얻어옵니다
        var level = map.getLevel();

        // var message = "현재 지도 레벨은 " + level + " 입니다";
        // var resultDiv = document.getElementById("result");
        // resultDiv.innerHTML = message;
      });

      var mapTypeControl = new kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      // GeoLocation 사용할 수 있는 경우
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var lat = position.coords.latitude;
          var lon = position.coords.longitude;

          var locPosition = new kakao.maps.LatLng(lat, lon);
          map.setCenter(locPosition);
        });
      }
    },

    updateAptMarkersByDong(dongCode) {
      this.clearMarkers(this.markers);

      // move center
      restApi.get(`/api/location/${dongCode}`).then(({ data }) => {
        this.moveCenterByAddress(this.map, `${data.sido} ${data.gugun} ${data.dong}`);
      });

      restApi.get(`/api/apts?dongCode=${dongCode}`).then(({ data }) => {
        this.apts = data;
        this.addAptMarkers(this.apts);
      });
    },

    addAptMarkers(apts) {
      console.log("addAptMarkers");

      console.log(this.map);
      //aptName, buildYear, TODO: 실거래가 정보도 추가??
      apts.forEach((apt) => {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: this.map,
          position: new kakao.maps.LatLng(apt.lat, apt.lng),
        });

        // 마커에 표시할 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div>${apt.aptName}</div>`,
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

        this.markers.push(marker);
      });
    },

    addMarkers(markers) {
      markers.forEach((marker) => {
        marker.setMap(this.map);
      });
    },

    clearMarkers(markers) {
      markers.forEach((marker) => {
        marker.setMap(null);
      });
    },

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
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

    moveCenterByAddress(map, address) {
      console.log("moveCenterbyAddress");
      console.log(address);
      this.geocoder.addressSearch(address, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          map.setCenter(coords);
        }
      });
    },
  },
};
</script>

<style scoped>
.background-map {
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>
