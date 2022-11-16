<template>
  <div class="search-result-container">
      <!--로드뷰-->
      <div id="roadview"></div>
      <!--아파트명-->
      <detail-name-card></detail-name-card>
      <div class="temp-child"></div>
      <!--탭 바-->
      <!--정보 카드-->
      안녕하세요
    </div>
</template>

<script>
import DetailNameCard from "@/components/search/detail/DetailNameCard.vue";

export default {
  name: "SearchResult",

  components: { DetailNameCard },

  data() {
    return {
      // road: new kakao.maps.LatLng(33.450701, 126.570667),
      road: {},
    };
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
      var roadviewContainer = document.getElementById("roadview"); // 로드뷰를 표시할 div
      var roadview = new kakao.maps.Roadview(roadviewContainer); // 로드뷰 객체
      var roadviewClient = new kakao.maps.RoadviewClient(); // 로드뷰 helper 객체

      // 지도를 생성할 때 필요한 기본 옵션
      this.road = new kakao.maps.LatLng(33.450701, 126.570667);
      var position = this.road; //지도의 중심좌표.
      // var position =  new kakao.maps.LatLng(33.450701, 126.570667);

      roadviewClient.getNearestPanoId(position, 50, function (panoId) {
        roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
      }); //지도 생성 및 객체 리턴
    },
  },
};
</script>

<style scoped>
.search-result-container {
  background-color: lightgrey;
  position: fixed;
  z-index: 2;
  width: 450px;
  height: 100%;
  overflow-y: scroll !important;
  padding: 0;
}

.relative-position {
  position: relative;
}

#roadview {
  width: auto;
  height: 300px;
}

.temp-child {
  height: 1000px;
  background-color: orange;
}
</style>
