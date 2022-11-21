<template>
  <div class="search-result-container">
    <div id="roadview"></div>
    <name-card :apt="apt"></name-card>

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
            id="apt-reviews-tab"
            data-bs-toggle="tab"
            data-bs-target="#apt-reviews"
            type="button"
            role="tab"
            aria-controls="apt-reviews"
            aria-selected="false"
          >
            맞춤 정보
          </div>
        </li>
      </ul>
    </div>
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
        <deal-record :apt="apt"></deal-record>
      </div>
      <div class="tab-pane fade" id="apt-reviews" role="tabpanel" aria-labelledby="apt-reviews-tab">
        <!-- <deal-record :apt="apt"></deal-record> -->
      </div>
    </div>
  </div>
</template>

<script>
import NameCard from "@/components/search/sidebar/aptdetail/AptDetailNameCard.vue";
import BasicInfo from "@/components/search/sidebar/aptdetail/AptDetailBasicInfoView.vue";
import DealRecord from "@/components/search/sidebar/aptdetail/AptDetailDealRecordView.vue";

import { getAptAll } from "@/api/modules/location";

export default {
  components: { NameCard, BasicInfo, DealRecord },

  props: ["aptCode"],

  data() {
    return {
      apt: {},
    };
  },

  mounted() {},

  created() {
    this.getAptAll(this.aptCode).then(({ data }) => {
      this.apt = data;
    });
  },

  methods: {
    getAptAll,
  },

  watch: {
    // dongCode() {
    //   this.getAptsByDong(this.dongCode).then(({ data }) => {
    //     this.apts = data;
    //   });
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
  padding-bottom: 80px;
}

.detail-nav-tabs {
  margin-top: 2px;
  height: auto;
  width: 100% !important;
  background-color: #f9f9f9;
}

.nav-tabs {
  margin-right: 10px;
  margin-left: 10px;
}

.nav-tabs > .nav-item {
  text-align: center;
}

.search-result-container > article {
  background-color: #f9f9f9;
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
