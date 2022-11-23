<template>
  <router-view></router-view>

  <div class="search-result-container">
    <!--로드뷰-->
    <!-- <div id="roadview"></div>
    <div class="result-inner-menu"> -->
    <!--아파트명-->
    <!-- <name-card></name-card> -->
    <!--탭 바-->
    <!-- <nav-tab></nav-tab> -->
    <!-- </div> -->
    <!-- <basic-house-view></basic-house-view> -->
    <!-- <div class="temp-child"></div> -->
    <!--정보 카드-->
  </div>
</template>

<script>
import NameCard from "@/components/search/houseinfo/HouseInfoNameCard.vue";
import NavTab from "@/components/search/houseinfo/HouseInfoNavTab.vue";
// import BasicHouseView from "@/components/search/houseinfo/basic/BasicView.vue";
import SidebarAptList from "@/components/search/sidebar/SidebarAptList.vue";

const SERVICE_KEY = import.meta.env.VITE_HOUSE_MATCH_KAKAO_MAP_API_KEY;

export default {
  components: { NameCard, NavTab, SidebarAptList },

  data() {
    return {
      // road: new kakao.maps.LatLng(33.450701, 126.570667),
      road: {},
    };
  },

  mounted() {
    console.log("sidebar mounted");

    // if (window.kakao && window.kakao.maps) {
    //   console.log("hello");
    //   this.initMap();
    // } else {
    //   console.log("hello222");
    //   const script = document.createElement("script");
    //   /* global kakao */
    //   script.onload = () => kakao.maps.load(this.initMap);
    //   script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${SERVICE_KEY}&libraries=services`;
    //   document.head.appendChild(script);
    // }
  },

  methods: {
    // initMap() {
    //   console.log("search sidebar initmap");
    //   var roadviewContainer = document.getElementById("roadview"); // 로드뷰를 표시할 div
    //   var roadview = new kakao.maps.Roadview(roadviewContainer); // 로드뷰 객체
    //   var roadviewClient = new kakao.maps.RoadviewClient(); // 로드뷰 helper 객체
    //   // 지도를 생성할 때 필요한 기본 옵션
    //   this.road = new kakao.maps.LatLng(33.450701, 126.570667);
    //   var position = this.road; //지도의 중심좌표.
    //   // var position =  new kakao.maps.LatLng(33.450701, 126.570667);
    //   roadviewClient.getNearestPanoId(position, 50, function (panoId) {
    //     roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
    //   }); //지도 생성 및 객체 리턴
    // },
  },
};
</script>

<style scoped>
.search-result-container {
  background-color: #ced4da;
  position: fixed;
  z-index: 2;
  width: 450px;
  height: 100%;
  overflow-y: auto !important;
  padding: 0;
  padding-bottom: 100px;
}
#roadview {
  width: auto;
  height: 300px;
}

.result-inner-menu {
  position: sticky;
  top: 0;
  background-color: #ced4da;
}
</style>
