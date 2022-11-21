<template>
  <div>
    <div class="record-card">최근 거래가</div>
    <div class="record-card">거래가 차트</div>
    <div class="record-card">실거래가 내역 (최근 5개만 보여주기)</div>
  </div>
</template>

<script>
import { getAptDealRecords } from "@/api/modules/location";

export default {
  components: { getAptDealRecords },

  props: ["apt"],

  data() {
    return {
      deals: [],
    };
  },

  created() {
    this.getAptDealRecords(this.apt.basic.aptCode).then(({ data }) => {
      this.deals = data;
    });
  },

  mounted() {},

  methods: {
    getAptDealRecords,
  },
};
</script>

<style scoped>
.record-card {
  margin-top: 2px;
  height: auto;
  width: 100% !important;

  padding: 18px 15px;

  background-color: #f9f9f9;
  font-size: 13px;
}
</style>
