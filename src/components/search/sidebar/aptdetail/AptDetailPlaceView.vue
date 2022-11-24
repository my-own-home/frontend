<template>
  <div>
    <div v-if="!userInfo">
      <div class="detail-basics" style="text-align: center; padding: 25px 10px">
        <h6><i class="material-icons">contact_support</i>아직 회원이 아니신가요?</h6>
        <p style="margin-bottom: 1px">회원 가입하시고</p>
        <p style="margin-bottom: 1px">나에게 딱 맞는 아파트 정보를 찾아보세요!</p>
        <div class="text-center">
          <button
            @click="confirm"
            style="font-size: 13px; background-color: #3a86ff !important; color: #f9f9f9"
            class="btn btn-md w-100 false my-4 mb-2"
          >
            회원 가입하러 가기
          </button>
        </div>
      </div>
    </div>

    <div v-if="userInfo">
      <div class="detail-basics">
        <div>
          <span class="hashtag" v-for="(type, index) in userInfo.types" :key="index"
            >#{{ typeNames[type.type] }}
          </span>
        </div>
        <h6 class="hashtag-header">
          <span style="color: #3a86ff !important">{{ userInfo.name }}</span
          >님을 위한 맞춤 주변 정보입니다.
        </h6>
      </div>

      <div v-if="userInfo.types && this.typeList.includes(1)">
        <div class="detail-basic-accordion accordion accordion-flush" id="education-accordion">
          <div class="accordion-item">
            <h6 class="accordion-header" id="education-accordion-heading">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#education-accordion-collapse"
                data-bs-parent="#education-accordion"
              >
                <i class="material-icons">school</i> &nbsp;교육 정보
              </button>
            </h6>
            <div
              id="education-accordion-collapse"
              class="accordion-collapse collapse show"
              aria-labelledby="education-accordion-heading"
            >
              <div class="accordion-body">
                <div class="basic-detail-list">
                  <p class="basic-detail-head">
                    <font-awesome-icon icon="fa-solid fa-school" /> 초등학교
                  </p>
                  <ul class="basic-detail-body">
                    <li v-for="(prim, index) in primary" :key="index">
                      <strong>{{ prim.place_name }}</strong>
                      (약
                      {{ Math.round((prim.distance / 1000) * 10) / 10 }}km)
                    </li>
                  </ul>
                </div>
                <div class="basic-detail-list">
                  <p class="basic-detail-head">
                    <font-awesome-icon icon="fa-solid fa-children" /> 유치원
                  </p>
                  <ul class="basic-detail-body">
                    <li v-for="(kin, index) in kindergarten" :key="index">
                      <strong>{{ kin.place_name }}</strong>
                      (약
                      {{ Math.round((kin.distance / 1000) * 10) / 10 }}km)
                    </li>
                  </ul>
                </div>
                <div class="basic-detail-list">
                  <p class="basic-detail-head">
                    <font-awesome-icon icon="fa-solid fa-baby-carriage" /> 어린이집
                  </p>
                  <ul class="basic-detail-body">
                    <li v-for="(day, index) in daycare" :key="index">
                      <strong>{{ day.place_name }}</strong>
                      (약
                      {{ Math.round((day.distance / 1000) * 10) / 10 }}km)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="userInfo.types && this.typeList.includes(2)">
        <div class="detail-basic-accordion accordion accordion-flush" id="nature-accordion">
          <div class="accordion-item">
            <h6 class="accordion-header" id="nature-accordion-heading">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#nature-accordion-collapse"
                data-bs-parent="#nature-accordion"
                aria-expanded="true"
                aria-controls="nature-accordion-collapse"
              >
                <i class="material-icons">public</i> &nbsp;환경 정보
              </button>
            </h6>
            <div
              id="nature-accordion-collapse"
              class="accordion-collapse collapse"
              aria-labelledby="nature-accordion-heading"
            >
              <div class="accordion-body">
                <div class="basic-detail-list">
                  <p class="basic-detail-head"><i class="material-icons">subway</i> 지하철역</p>
                  <ul class="basic-detail-body">
                    <li><strong>3호선</strong> 대치역 (약 00m)</li>
                    <li><strong>3호선</strong> 대치역 (약 00m)</li>
                    <li><strong>3호선</strong> 대치역 (약 00m)</li>
                  </ul>
                </div>
                <div class="basic-detail-list">
                  <p class="basic-detail-head"><i class="material-icons">train</i> KTX</p>
                  <ul class="basic-detail-body">
                    <li>해당하는 역이 없습니다. (사실은 있음)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="userInfo.types && this.typeList.includes(3)">
        <div class="detail-basic-accordion accordion accordion-flush" id="safety-accordion">
          <div class="accordion-item">
            <h6 class="accordion-header" id="safety-accordion-heading">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#safety-accordion-collapse"
                data-bs-parent="#safety-accordion"
                aria-expanded="true"
                aria-controls="safety-accordion-collapse"
              >
                <i class="material-icons">emergency</i> &nbsp;안전 정보
              </button>
            </h6>
            <div
              id="safety-accordion-collapse"
              class="accordion-collapse collapse show"
              aria-labelledby="safety-accordion-heading"
            >
              <div class="accordion-body">
                <div class="basic-detail-list">
                  <p class="basic-detail-head">
                    <i class="material-icons">local_hospital</i> 대학병원
                  </p>
                  <ul class="basic-detail-body">
                    <li v-for="(hospital, index) in univHospital" :key="index">
                      <strong>{{ hospital.place_name }}</strong>
                      (약 {{ Math.round((hospital.distance / 1000) * 10) / 10 }}km)
                    </li>
                  </ul>
                </div>
                <div class="basic-detail-list">
                  <p class="basic-detail-head"><i class="material-icons">local_pharmacy</i> 약국</p>
                  <ul class="basic-detail-body">
                    <li v-for="(pharm, index) in pharm" :key="index">
                      <strong>{{ pharm.place_name }}</strong>
                      (약 {{ Math.round((pharm.distance / 1000) * 10) / 10 }}km)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="userInfo.types && this.typeList.includes(4)">
        <div class="detail-basic-accordion accordion accordion-flush" id="transport-accordion">
          <div class="accordion-item">
            <h6 class="accordion-header" id="transport-accordion-heading">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#transport-accordion-collapse"
                data-bs-parent="#transport-accordion"
                aria-expanded="true"
                aria-controls="transport-accordion-collapse"
              >
                <i class="material-icons">commute</i> &nbsp;교통 정보
              </button>
            </h6>
            <div
              id="transport-accordion-collapse"
              class="accordion-collapse collapse show"
              aria-labelledby="transport-accordion-heading"
            >
              <div class="accordion-body">
                <div class="basic-detail-list">
                  <p class="basic-detail-head"><i class="material-icons">subway</i> 지하철역</p>
                  <ul class="basic-detail-body">
                    <li v-for="(subway, index) in subway" :key="index">
                      <strong>{{ subway.place_name.split(" ")[1] }}</strong>
                      {{ subway.place_name.split(" ")[0] }} (약
                      {{ Math.round((subway.distance / 1000) * 10) / 10 }}km)
                    </li>
                  </ul>
                </div>
                <div class="basic-detail-list">
                  <p class="basic-detail-head">
                    <i class="material-icons">local_gas_station</i> 주유소
                  </p>
                  <ul class="basic-detail-body">
                    <li v-for="(pet, index) in petrol" :key="index">
                      <strong>{{ pet.place_name }}</strong>
                      (약
                      {{ Math.round((pet.distance / 1000) * 10) / 10 }}km)
                    </li>
                  </ul>
                </div>
                <div class="basic-detail-list">
                  <p class="basic-detail-head">
                    <i class="material-icons">local_parking</i> 주차장
                  </p>
                  <ul class="basic-detail-body">
                    <li v-for="(park, index) in parking" :key="index">
                      <strong>{{ park.place_name }}</strong>
                      (약
                      {{ Math.round((park.distance / 1000) * 10) / 10 }}km)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="userInfo.types && this.typeList.includes(5)">
        <div class="detail-basic-accordion accordion accordion-flush" id="life-accordion">
          <div class="accordion-item">
            <h6 class="accordion-header" id="life-accordion-heading">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#life-accordion-collapse"
                data-bs-parent="#life-accordion"
                aria-expanded="true"
                aria-controls="life-accordion-collapse"
              >
                <i class="material-icons">storefront</i> &nbsp;생활 정보
              </button>
            </h6>
            <div
              id="life-accordion-collapse"
              class="accordion-collapse collapse show"
              aria-labelledby="life-accordion-heading"
            >
              <div class="accordion-body">
                <div class="basic-detail-list">
                  <p class="basic-detail-head">
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" /> 마트
                  </p>
                  <ul class="basic-detail-body">
                    <li v-for="(supermarket, index) in supermarket" :key="index">
                      <strong>{{ supermarket.place_name }}</strong>
                      (약 {{ Math.round((supermarket.distance / 1000) * 10) / 10 }}km)
                    </li>
                  </ul>
                </div>
                <div class="basic-detail-list">
                  <p class="basic-detail-head">
                    <font-awesome-icon icon="fa-sharp fa-solid fa-store" /> 편의점
                  </p>
                  <ul class="basic-detail-body">
                    <li v-for="(cvs, index) in cvs" :key="index">
                      <strong>{{ cvs.place_name }}</strong>
                      (약 {{ Math.round((cvs.distance / 1000) * 10) / 10 }}km)
                    </li>
                  </ul>
                </div>
                <div class="basic-detail-list">
                  <p class="basic-detail-head">
                    <font-awesome-icon icon="fa-sharp fa-solid fa-store" /> 카페
                  </p>
                  <ul class="basic-detail-body">
                    <li v-for="(cafe, index) in cafe" :key="index">
                      <strong>{{ cafe.place_name }}</strong>
                      (약 {{ Math.round((cafe.distance / 1000) * 10) / 10 }}km)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { getPlaces } from "@/api/modules/place";
import { getAptInfo } from "@/api/modules/location";

const typeNames = ["", "교육", "환경", "안전", "교통", "생활"];
const userStore = "userStore";

export default {
  props: ["aptCode"],

  data() {
    return {
      typeNames,
      typeList: [],

      apt: null,
      latlng: null,

      // edu info
      daycare: [],
      kindergarten: [],
      primary: [],
      middle: [],
      high: [],

      // safety
      univHospital: [],
      pharm: [],

      // transport
      subway: [],
      petrol: [],
      parking: [],

      // life
      supermarket: [],
      cvs: [],
      cafe: [],
    };
  },

  computed: {
    ...mapState(userStore, ["userInfo"]),
  },

  watch: {
    subway(val) {
      console.log(val);
    },
  },

  mounted() {
    if (this.userInfo.types) {
      for (var i = 0; i < this.userInfo.types.length; ++i) {
        this.typeList.push(this.userInfo.types[i].type);
      }
    }
  },

  created() {
    this.getAptInfo(
      this.aptCode,
      ({ data }) => {
        this.apt = data;
        this.lat = data.lat;
        this.lng = data.lng;

        if (this.userInfo) {
          if (this.userInfo.types) {
            console.log(this.userInfo.types);
            for (var i = 0; i < this.userInfo.types.length; ++i) {
              if (this.userInfo.types[i].type == 1) {
                this.getData("어린이집", this.lat, this.lng, 10000, "PS3", this.daycare, 3);
                this.getData("유치원", this.lat, this.lng, 10000, "PS3", this.kindergarten, 3);
                this.getData("초등학교", this.lat, this.lng, 10000, "SC4", this.primary, 4);
              } else if (this.userInfo.types[i].type == 4) {
                this.getData("지하철역", this.lat, this.lng, 10000, "SW8", this.subway, 4);
                this.getData("주유소", this.lat, this.lng, 10000, "OL7", this.petrol, 4);
                this.getData("주차장", this.lat, this.lng, 10000, "PK6", this.parking, 4);
              } else if (this.userInfo.types[i].type == 3) {
                this.getData("대학병원", this.lat, this.lng, 20000, "HP8", this.univHospital, 3);
                this.getData("약국", this.lat, this.lng, 5000, "PM9", this.pharm, 5);
              } else if (this.userInfo.types[i].type == 5) {
                this.getData("마트", this.lat, this.lng, 5000, "MT1", this.supermarket, 5);
                this.getData("편의점", this.lat, this.lng, 5000, "CS2", this.cvs, 5);
                this.getData("카페", this.lat, this.lng, 5000, "CE7 ", this.cafe, 5);
              }
            }
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  },

  methods: {
    getPlaces,
    getAptInfo,

    confirm() {
      this.$router.push({ name: "register" });
    },

    getData(keyword, lat, lng, dist, catCode, array, count) {
      this.getPlaces(
        keyword,
        lng,
        lat,
        dist,
        catCode,
        ({ data }) => {
          let documents = data.documents;
          console.log(documents);
          if (documents.length > 0) {
            documents.sort((a, b) => (a.distance > b.distance ? 1 : -1));
            if (documents.length < count) {
              array = documents;
            } else {
              for (var i = 0; i < count - 1; ++i) {
                array.push(documents[i]);
              }
            }
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<style scoped>
.hashtag {
  font-size: 13px;
  padding: 5px 5px;
  background-color: #3a86ff35;
  color: #344767;
  margin-right: 5px;
  border-radius: 10px;
}

.hashtag-header {
  margin-top: 5px;
  margin-right: 2px;
  margin-bottom: 0;
}

.detail-basics {
  margin-top: 2px;
  height: auto;
  width: 100% !important;

  padding: 15px 15px;

  background-color: #f9f9f9;
  font-size: 13px;
}

.detail-basics h6 {
  padding-left: 1px;
}

.detail-basics table {
  border-collapse: collapse;
  color: #344767;
  word-wrap: break-word !important;
  white-space: normal !important;
  margin-bottom: 0;
}

.detail-basics table tr:first-child {
  border-top: 0.6px solid #6c757d !important;
}

.detail-basics table tr:last-child {
  border-style: hidden;
  border-bottom: 0.6px solid #6c757d !important;
}

.detail-basics table th {
  background-color: #ced4da60 !important;
  width: 25%;
}

.detail-basics table td {
  width: 75%;
}

/*------------------------
    accordion
-------------------------*/

.detail-basic-accordion {
  margin-top: 5px;
  height: auto;
  width: 100% !important;

  background-color: #f9f9f9;
}

.detail-basic-accordion .accordion-button {
  padding: 10px 15px !important;
  font-weight: bold;
  color: #344767;
}

.detail-basic-accordion .accordion-button:after {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23344767'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !important;
}

.detail-basic-accordion .accordion-body {
  padding: 10px 15px !important;
}

.detail-basic-accordion p {
  color: #344767;
  font-size: 13px !important;
  margin-bottom: 5px;
}

.detail-basic-accordion ul {
  list-style-type: none;
  color: #344767;
  font-size: 13px !important;
  line-height: 1.6;
  padding: 15px 10px;
  background-color: #ced4da60;
}

.detail-basic-accordion li {
  line-height: 1.7;
}

.detail-basic-accordion .basic-detail-head {
  font-weight: 600;
}
</style>
