<template>
  <div class="map-container">
    <div id="bg-map" class="background-map"></div>
    <ul id="category">
      <li id="BK9" data-order="0">
        <span class="category_bg bank"></span>
        은행
      </li>
      <li id="MT1" data-order="1">
        <span class="category_bg mart"></span>
        마트
      </li>
      <li id="PM9" data-order="2">
        <span class="category_bg pharmacy"></span>
        약국
      </li>
      <li id="OL7" data-order="3">
        <span class="category_bg oil"></span>
        주유소
      </li>
      <li id="CE7" data-order="4">
        <span class="category_bg cafe"></span>
        카페
      </li>
      <li id="CS2" data-order="5">
        <span class="category_bg store"></span>
        편의점
      </li>
      <li id="AD5" data-order="5">
        <span class="category_bg hotel"></span>
        숙박
      </li>
    </ul>
  </div>
</template>

<script>
/* global kakao */
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { LOCATION } from "@/store/mutation-types.js";
import restApi from "@/util/http-common.js";

const locationStore = "locationStore";
const SERVICE_KEY = import.meta.env.VITE_HOUSE_MATCH_KAKAO_MAP_API_KEY;

export default {
  data() {
    return {
      map: null,
      level: null,
      infowindow: null,
      geocoder: null,

      placeOverlay: null,
      contentNode: null,
      overlayMarkers: [],
      currCategory: null,
      ps: null,

      aptList: [],
      markers: [],
      mapFilter: null,
    };
  },

  computed: {
    ...mapGetters(locationStore, [
      LOCATION.GETTER_APTS,
      LOCATION.GETTER_DONGCODE,
      LOCATION.GETTER_MAP_CENTER,
    ]),
  },

  watch: {
    // [LOCATION.GETTER_MAP_CENTER](latlng) {
    //   this.moveMapCenter(this.map, latlng);
    // },

    [LOCATION.GETTER_APTS](apts) {
      this.aptList = apts;
    },

    aptList() {
      this.updateAptMarkers();
    },

    overlayMarkers(val) {
      console.log(this.overlayMarkers);
    },
  },

  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${SERVICE_KEY}&libraries=services`;
      document.head.appendChild(script);
    }
  },

  methods: {
    ...mapMutations(locationStore, [LOCATION.SET_MAP_CENTER]),

    initMap() {
      var container = document.getElementById("bg-map");
      var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        draggable: true,
        level: 3,
      };

      var map = new kakao.maps.Map(container, options);
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

      /* 카테고리별 장소 등록 */
      this.placeOverlay = new kakao.maps.CustomOverlay({ zIndex: 1 });
      this.contentNode = document.createElement("div"); // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다
      this.overlayMarkers = []; // 마커를 담을 배열입니다
      this.currCategory = ""; // 현재 선택된 카테고리를 가지고 있을 변수입니다

      // 장소 검색 객체를 생성합니다
      this.ps = new kakao.maps.services.Places(map);

      // 지도에 idle 이벤트를 등록합니다
      kakao.maps.event.addListener(this.map, "idle", this.searchPlaces);

      // 커스텀 오버레이의 컨텐츠 노드에 css class를 추가합니다
      this.contentNode.className = "placeinfo_wrap";
      console.log(this.contentNode);

      // 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
      // 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다
      this.addEventHandle(this.contentNode, "mousedown", kakao.maps.event.preventMap);
      this.addEventHandle(this.contentNode, "touchstart", kakao.maps.event.preventMap);

      // 커스텀 오버레이 컨텐츠를 설정합니다
      this.placeOverlay.setContent(this.contentNode);

      // 각 카테고리에 클릭 이벤트를 등록합니다
      this.addCategoryClickEvent();
    },

    // 엘리먼트에 이벤트 핸들러를 등록하는 함수입니다
    addEventHandle(target, type, callback) {
      if (target.addEventListener) {
        target.addEventListener(type, callback);
      } else {
        target.attachEvent("on" + type, callback);
      }
    },

    // 카테고리 검색을 요청하는 함수입니다
    searchPlaces() {
      if (!this.currCategory) {
        return;
      }

      // 커스텀 오버레이를 숨깁니다
      this.placeOverlay.setMap(null);

      // 지도에 표시되고 있는 마커를 제거합니다
      this.removeMarkers(this.overlayMarkers);

      this.ps.categorySearch(this.currCategory, this.placesSearchCB, { useMapBounds: true });
    },

    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다
        this.displayPlaces(data);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요
      } else if (status === kakao.maps.services.Status.ERROR) {
        // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
      }
    },

    displayPlaces(places) {
      // 몇번째 카테고리가 선택되어 있는지 얻어옵니다
      // 이 순서는 스프라이트 이미지에서의 위치를 계산하는데 사용됩니다
      var order = document.getElementById(this.currCategory).getAttribute("data-order");
      var prethis = this;

      for (var i = 0; i < places.length; i++) {
        // 마커를 생성하고 지도에 표시합니다
        var marker = this.addMarker(new kakao.maps.LatLng(places[i].y, places[i].x), order);

        // 마커와 검색결과 항목을 클릭 했을 때
        // 장소정보를 표출하도록 클릭 이벤트를 등록합니다

        (function (marker, place) {
          kakao.maps.event.addListener(marker, "click", function () {
            prethis.displayPlaceInfo(place);
          });
        })(marker, places[i], prethis);
      }
    },

    updateAptMarkersByDong(dongCode, apts) {
      this.removeMarkers(this.markers);

      restApi.get(`/api/location/${dongCode}`).then(({ data }) => {
        this.moveCenterByAddress(this.map, `${data.sido} ${data.gugun} ${data.dong}`);
      });

      this.addAptMarkers(apts);
    },

    addMarker(position, order) {
      var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new kakao.maps.Size(27, 28), // 마커 이미지의 크기
        imgOptions = {
          spriteSize: new kakao.maps.Size(72, 208), // 스프라이트 이미지의 크기
          spriteOrigin: new kakao.maps.Point(46, order * 36), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          offset: new kakao.maps.Point(11, 28), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
        marker = new kakao.maps.Marker({
          position: position, // 마커의 위치
          image: markerImage,
        });

      marker.setMap(this.map); // 지도 위에 마커를 표출합니다
      this.overlayMarkers.push(marker); // 배열에 생성된 마커를 추가합니다

      return marker;
    },

    displayPlaceInfo(place) {
      var content =
        '<div class="placeinfo">' +
        '   <a class="title" href="' +
        place.place_url +
        '" target="_blank" title="' +
        place.place_name +
        '">' +
        place.place_name +
        "</a>";

      if (place.road_address_name) {
        content +=
          '    <span title="' +
          place.road_address_name +
          '">' +
          place.road_address_name +
          "</span>" +
          '  <span class="jibun" title="' +
          place.address_name +
          '">(지번 : ' +
          place.address_name +
          ")</span>";
      } else {
        content += '    <span title="' + place.address_name + '">' + place.address_name + "</span>";
      }

      content +=
        '    <span class="tel">' + place.phone + "</span>" + "</div>" + '<div class="after"></div>';

      this.contentNode.innerHTML = content;
      this.placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
      this.placeOverlay.setMap(this.map);
    },

    // 각 카테고리에 클릭 이벤트를 등록합니다
    addCategoryClickEvent() {
      var category = document.getElementById("category");
      var children = category.children;
      let compThis = this;

      for (var i = 0; i < children.length; i++) {
        children[i].addEventListener("click", function () {
          var id = this.id,
            className = this.className;
          console.log(this);
          compThis.placeOverlay.setMap(null);
          if (className === "on") {
            compThis.currCategory = "";
            compThis.changeCategoryClass();
            compThis.removeMarker();
          } else {
            compThis.currCategory = id;
            compThis.changeCategoryClass(this);
            compThis.searchPlaces();
          }
        });
      }
    },

    // 카테고리를 클릭했을 때 호출되는 함수입니다
    onClickCategory() {
      var id = this.id;
      var className = this.className;

      this.placeOverlay.setMap(null);

      if (className === "on") {
        this.currCategory = "";
        this.changeCategoryClass();
        this.removeMarkers(this.overlayMarkers);
      } else {
        this.currCategory = id;
        this.changeCategoryClass(el);
        this.searchPlaces();
      }
    },

    // 클릭된 카테고리에만 클릭된 스타일을 적용하는 함수입니다
    changeCategoryClass(el) {
      var category = document.getElementById("category"),
        children = category.children,
        i;

      for (i = 0; i < children.length; i++) {
        children[i].className = "";
      }

      if (el) {
        el.className = "on";
      }
    },

    updateAptMarkers() {
      this.removeMarkers(this.markers);
      //aptName, buildYear, TODO: 실거래가 정보도 추가??
      this.aptList.forEach((apt) => {
        var imageSrc = "../assets/img/profiles/green-home.svg", // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
          imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: this.map,
          position: new kakao.maps.LatLng(apt.lat, apt.lng),
          image: new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
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

      if (this.aptList.length > 0) {
        this.map.panTo(new kakao.maps.LatLng(this.aptList[0].lat, this.aptList[0].lng));
      }
    },

    addMarkers(markers) {
      markers.forEach((marker) => {
        marker.setMap(this.map);
      });
    },

    removeMarkers(markers) {
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
      console.log("MoveCenterByAddress");
      this.geocoder.addressSearch(address, function (result, status) {
        console.log("geocoder.addressSearch");

        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          this[LOCATION.SET_MAP_CENTER](result[0].y, result[0].x);
          // this.store.commit("locationStore/setMapCenter", coords);

          // var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          // map.setCenter(coords);
        }
      });
    },

    moveMapCenter(map, latlng) {
      var coords = new kakao.maps.LatLng(latlng.lat, latlng.lng);
      map.setCenter(coords);
    },

    updateAptList() {
      if (this.apts && this.mapFilter === null) {
        this.aptList = this.apt;
      }
    },
  }, // end methods
};
</script>

<style scoped>
.background-map {
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.map-container,
.map-container * {
  margin: 0;
  padding: 0;

  font-family: "Malgun Gothic", dotum, "돋움", sans-serif;
  font-size: 12px;
}
.map-container {
  position: relative;
  width: 100%;
  height: 350px;
}
#category {
  position: absolute;
  top: 100px;
  right: 50px;
  border-radius: 5px;
  border: 1px solid #909090;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  background: #fff;
  overflow: hidden;
  z-index: 2;
}

#category li {
  float: left;
  list-style: none;
  width: 50px;
  border-right: 1px solid #acacac;
  padding: 6px 0;
  text-align: center;
  cursor: pointer;
}
#category li.on {
  background: #eee;
}
#category li:hover {
  background: #ffe6e6;
  border-left: 1px solid #acacac;
  margin-left: -1px;
}
#category li:last-child {
  margin-right: 0;
  border-right: 0;
}
#category li span {
  display: block;
  margin: 0 auto 3px;
  width: 27px;
  height: 28px;
}
#category li .category_bg {
  background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png)
    no-repeat;
}
#category li .bank {
  background-position: -10px 0;
}
#category li .mart {
  background-position: -10px -36px;
}
#category li .pharmacy {
  background-position: -10px -72px;
}
#category li .oil {
  background-position: -10px -108px;
}
#category li .cafe {
  background-position: -10px -144px;
}
#category li .store {
  background-position: -10px -180px;
}
#category li.on .category_bg {
  background-position-x: -46px;
}
</style>

<style>
.placeinfo_wrap {
  position: absolute;
  bottom: 28px;
  left: -150px;
  width: 300px;
}
.placeinfo {
  position: relative;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ccc;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
  background: #fff;
}
.placeinfo:nth-of-type(n) {
  border: 0;
  box-shadow: 0px 1px 2px #888;
}
.placeinfo_wrap .after {
  content: "";
  position: relative;
  margin-left: -12px;
  left: 50%;
  width: 22px;
  height: 12px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
}
.placeinfo a,
.placeinfo a:hover,
.placeinfo a:active {
  color: #fff;
  text-decoration: none;
}
.placeinfo a,
.placeinfo span {
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.placeinfo span {
  margin: 5px 5px 0 5px;
  cursor: default;
  font-size: 13px;
}
.placeinfo .title {
  font-weight: bold;
  font-size: 14px;
  border-radius: 6px 6px 0 0;
  margin: -1px -1px 0 -1px;
  padding: 10px;
  color: #fff;
  background: #d95050;
  background: #d95050 url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)
    no-repeat right 14px center;
}
.placeinfo .tel {
  color: #0f7833;
}
.placeinfo .jibun {
  color: #999;
  font-size: 11px;
  margin-top: 0;
}
</style>
