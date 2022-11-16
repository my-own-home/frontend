<template>
  <div class="detail-nav-tabs">
    <ul class="nav nav-tabs d-flex justify-content-between">
      <!-- active로 사용하고 있다는 처리해주기 -->
      <li class="nav-item col-4">
        <router-link to="#" class="nav-link active">기본 정보</router-link>
      </li>
      <li class="nav-item col-4">
        <router-link to="#" class="nav-link">실거래가</router-link>
      </li>
      <li class="nav-item col-4">
        <router-link to="#" class="nav-link">리뷰</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.detail-nav-tabs {
  margin-top: 2px;
  height: auto;
  width: 100% !important;
  background-color: #f9f9f9;
}

.nav-tabs {
  margin-right: 20px;
  margin-left: 20px;
}

.nav-tabs > .nav-item {
  text-align: center;
}

.nav-item :not(.active) {
  color: #344767 !important;
}
.nav-item > .active {
  background-color: #f9f9f9 !important;
  border-top: 0 !important;
  border-right: 0 !important;
  border-left: 0 !important;
  border-bottom: 2px #3a86ff solid !important;
  color: #3a86ff !important;
  font-weight: 600;
}
</style>
