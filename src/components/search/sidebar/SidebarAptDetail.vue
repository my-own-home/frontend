<template>
  <div class="search-result-container">
    <div id="roadview"></div>

    <div class="result-inner-menu" style="z-index: 50">
      <!-- name card -->
      <div class="name-container">
        <div class="star-btn" @click="checkFav">
          <!-- 채운 별은 bi-star-fill, click event 여기에 걸기-->
          <i :class="[isFav ? 'bi-star-fill' : 'bi-star', 'bi']"></i>
        </div>

        <div>
          <h4>{{ apt.basic?.aptName }}</h4>
          <p class="mb-0 apt-name-detail">
            <i class="bi bi-geo-alt-fill"></i> {{ apt.basic?.fullRoadAddress }}
          </p>
          <p class="mb-0 apt-name-detail">
            {{ apt.detail?.approveDate.substring(0, 4) }}년
            {{ apt.detail?.approveDate.substring(5, 7) }}월
            {{ apt.detail?.approveDate.substring(8, 10) }}일 / {{ apt.detail?.householdCount }}세대
            / {{ apt.detail?.dongCount }}동
          </p>
        </div>
      </div>

      <!-- nav tab -->
      <div class="detail-nav-tabs">
        <ul class="nav nav-tabs d-flex justify-content-between" id="myTab" role="tablist">
          <!-- active로 사용하고 있다는 처리해주기 -->
          <li class="nav-item col-3" role="presentation">
            <div
              class="nav-link active"
              id="apt-basic-info-tab"
              data-bs-toggle="tab"
              data-bs-target="#apt-basic-info"
              type="button"
              role="tab"
              aria-controls="apt-basic-info"
              aria-selected="false"
            >
              기본 정보
            </div>
          </li>
          <li class="nav-item col-3" role="presentation">
            <div
              class="nav-link"
              id="apt-price-records-tab"
              data-bs-toggle="tab"
              data-bs-target="#apt-price-records"
              type="button"
              role="tab"
              aria-controls="apt-price-records"
              aria-selected="false"
            >
              실거래가
            </div>
          </li>
          <li class="nav-item col-3" role="presentation">
            <div
              class="nav-link"
              id="apt-reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#apt-reviews"
              type="button"
              role="tab"
              aria-controls="apt-reviews"
              aria-selected="false"
            >
              리뷰
            </div>
          </li>
          <li class="nav-item col-3" role="presentation">
            <div
              class="nav-link"
              id="apt-places-tab"
              data-bs-toggle="tab"
              data-bs-target="#apt-places"
              type="button"
              role="tab"
              aria-controls="apt-places"
              aria-selected="false"
            >
              맞춤 정보
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- nav tab content -->
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="apt-basic-info"
        role="tabpanel"
        aria-labelledby="apt-basic-info-tab"
      >
        <basic-info :apt="apt"></basic-info>
      </div>
      <div
        class="tab-pane fade"
        id="apt-price-records"
        role="tabpanel"
        aria-labelledby="apt-price-records-tab"
      >
        <deal-record :aptCode="aptCode"></deal-record>
      </div>
      <div class="tab-pane fade" id="apt-reviews" role="tabpanel" aria-labelledby="apt-reviews-tab">
        <review :aptCode="aptCode"></review>
      </div>
      <div class="tab-pane fade" id="apt-places" role="tabpanel" aria-labelledby="apt-places-tab">
        <place :aptCode="aptCode"></place>
      </div>
    </div>
  </div>
</template>

<script>
import BasicInfo from "@/components/search/sidebar/aptdetail/AptDetailBasicInfoView.vue";
import DealRecord from "@/components/search/sidebar/aptdetail/AptDetailDealRecordView.vue";
import Review from "@/components/search/sidebar/aptdetail/AptDetailReviewView.vue";
import Place from "@/components/search/sidebar/aptdetail/AptDetailPlaceView.vue";

import {
  getAptInfo,
  getAptDetail,
  getAptDealRecords,
  getAptAll,
  addFavApt,
  removeFavApt,
} from "@/api/modules/location";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { LOCATION } from "@/store/mutation-types.js";

const locationStore = "locationStore";
const userStore = "userStore";
const SERVICE_KEY = import.meta.env.VITE_HOUSE_MATCH_KAKAO_MAP_API_KEY;

export default {
  components: { BasicInfo, DealRecord, Review, Place },

  props: ["aptCode"],

  data() {
    return {
      apt: {},
      latlng: {},
      isFav: false,
    };
  },

  computed: {
    ...mapState(userStore, ["userInfo"]),
  },

  watch: {
    aptCode() {
      this.setAptInfo(this.aptCode);
    },
  },

  mounted() {
    this.setAptInfo(this.aptCode);
  },

  created() {},

  methods: {
    getAptInfo,
    getAptDetail,
    getAptDealRecords,
    getAptAll,
    addFavApt,
    removeFavApt,

    setAptInfo(aptCode) {
      this.getAptAll(
        aptCode,
        ({ data }) => {
          this.apt = data;
          this.latlng = {
            lat: `${this.apt.basic.lat}`,
            lng: `${this.apt.basic.lng}`,
          };
          this.createRoadView(this.latlng);
        },
        (error) => {
          console.log(error);
        }
      );
    },

    checkFav() {
      if (this.userInfo && !this.isFav) {
        this.addFavApt(
          this.aptCode,
          this.userInfo.id,
          ({ data }) => {
            if (data.id) {
              this.isFav = true;
              alert("관심 아파트로 등록했습니다.");
            } else {
              alert("이미 관심 아파트로 등록되어있습니다.");
            }
          },
          (error) => {
            console.log(error);
          }
        );
      } else if (this.userInfo && this.isFav) {
        this.removeFavApt(
          this.aptCode,
          this.userInfo.id,
          ({ data }) => {
            this.isFav = false;
            alert("관심 아파트에서 삭제했습니다.");
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        alert("로그인이 필요한 기능입니다.");
      }
    },

    createRoadView(latlng) {
      if (window.kakao && window.kakao.maps) {
        this.initRoadView(latlng);
      } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(this.initRoadView(latlng));
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${SERVICE_KEY}&libraries=services`;
        document.head.appendChild(script);
      }
    },

    initRoadView(latlng) {
      var roadviewContainer = document.getElementById("roadview"); // 로드뷰를 표시할 div
      var roadview = new kakao.maps.Roadview(roadviewContainer); // 로드뷰 객체
      var roadviewClient = new kakao.maps.RoadviewClient(); // 로드뷰 helper 객체

      // 지도를 생성할 때 필요한 기본 옵션
      var position = new kakao.maps.LatLng(latlng.lat, latlng.lng); //지도의 중심좌표.

      roadviewClient.getNearestPanoId(position, 50, function (panoId) {
        roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
      }); //지도 생성 및 객체 리턴
    },
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
  padding-bottom: 80px;
}

/* ::-webkit-scrollbar {
  display: none;
} */

#roadview {
  width: auto;
  height: 250px;
}

.result-inner-menu {
  position: sticky;
  top: 0;
  background-color: #fff;
}

/*------------------------
    name card
-------------------------*/
.name-container {
  position: relative;
  height: auto;
  width: 100% !important;

  padding-top: 16px;
  padding-bottom: 11.2px;
  padding-right: 16px;
  padding-left: 20px;

  background-color: #fff;
}
.name-container p {
  font-size: 14.4px !important;
}

.name-container h4 {
  font-size: 20px !important;
  margin-bottom: 8px;
}
.name-container .apt-name-detail {
  font-size: 13px !important;
}

.name-container .star-btn,
.name-container .share-btn {
  position: absolute;
}
.name-container .star-btn {
  top: 8px;
  right: 30px;
  font-size: 32px;
  color: #ffcf36;
}

.name-container .star-btn:hover {
  cursor: pointer;
}
.name-container .share-btn {
  bottom: 20px;
  right: 35px;
  font-size: 23px;
}

/*------------------------
    nav-tabs
-------------------------*/
.detail-nav-tabs {
  margin-top: 2px;
  height: auto;
  width: 100% !important;
  background-color: #fff;
}

.nav-tabs {
  margin-right: 10px;
  margin-left: 10px;
}

.nav-tabs > .nav-item {
  text-align: center;
}

.nav-item {
  background-color: transparent;
}

.nav-item :not(.active) {
  color: #fff;
  color: #344767 !important;
  border: none;
}
.nav-item > .active {
  /* background-color: #f9f9f9 !important; */
  border-top: 0 !important;
  border-right: 0 !important;
  border-left: 0 !important;
  border-bottom: 2px #3a86ff solid !important;
  color: #3a86ff !important;
  font-weight: 600;
}

.search-result-container > article {
  background-color: #fff;
  padding: 10px 15px;
  margin-top: 2px;
  height: auto;
  width: 100% !important;
}
.apt-name {
  font-size: 1rem;
  font-weight: bold;
  color: #000;
}

.apt-details {
  font-size: 0.7rem;
  color: #474747;
}

p {
  margin: 0 !important;
}
</style>
