<template>
  <div id="bg-map" class="background-map"></div>
</template>

<script>
/* global kakao */

export default {
  name: "SearchMap",

  data() {
    return {
      map: null,
      markers: [],
      geocoder: null,
      infowindow: null,
    };
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
