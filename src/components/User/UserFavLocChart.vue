<template>
  <div>
    <div class="detail-basics" height="350px">
      <h6><i class="material-icons">trending_up</i>최근 3년간 월별 평균 실거래가</h6>
      <LineChart :chart-data="chartData" :chart-options="chartOptions" />
    </div>

    <div class="record-card">실거래가 내역 (최근 5개만 보여주기)</div>
    <div>
      2015년 6월 당시 해당지역 아파트 평균 가격을 기준(100)으로 삼고 이후 상승 또는 하락 정도를 쉽게
      알 수 있도록 측정한 값
    </div>
  </div>
</template>

<script>
import {
  getAptDealRecordsWithPage,
  getAptDealRecordMonthlyAvgByArea,
} from "@/api/modules/location";

import LineChart from "@/components/common/chartjs/LineChart.vue";

export default {
  components: { LineChart },

  props: ["aptCode"],

  data() {
    return {
      recentDeal: {},
      avgList: [],
      dealList: [],
      navigator: null,
      areas: [],
      chartData: {
        labels: "",
        datasets: [],
      },
      chartOptions: {},
    };
  },

  created() {},

  mounted() {
    this.getAptDealRecordsWithPage(
      this.aptCode,
      1,
      ({ data }) => {
        this.dealList = data.deals;
        this.navigator = data.navigation;
        this.recentDeal = this.dealList[0];
      },
      (error) => {
        console.log(error);
      }
    );

    this.getAptDealRecordMonthlyAvgByArea(
      this.aptCode,
      ({ data }) => {
        this.avgList = data;
        // console.log("getAptDealRecordMonthlyAvgByArea");
        // console.log(this.avgList);
        this.areas = Object.getOwnPropertyNames(this.avgList);
        // console.log(this.areas[0]);
        this.setChartData(this.areas[0]);
      },
      (error) => {
        console.log(error);
      }
    );
  },

  methods: {
    getAptDealRecordsWithPage,
    getAptDealRecordMonthlyAvgByArea,

    setChartData(area) {
      let dataSet = this.avgList[area];

      // console.log(dataSet);

      let xLabels = [];
      let min = [];
      let max = [];
      let avg = [];

      for (var i = 0; i < dataSet.length; i++) {
        xLabels.push(dataSet[i].dealYear + "." + dataSet[i].dealMonth);
        max.push(dataSet[i].max);
        min.push(dataSet[i].min);
        avg.push(Math.round(dataSet[i].dealAmount));
      }

      let datasets = [
        {
          label: "상한가",
          fill: "+1",
          data: max,
          borderColor: "#5e89fb",
          // backgroundColor: "#5e88fb9d",
        },
        {
          label: "하한가",
          data: min,
          fill: true,

          borderColor: "#5e89fb",
          // backgroundColor: "#5e88fb9d",
        },
        {
          label: "평균가",
          data: avg,
          borderColor: "#7437a6",
        },
      ];

      // console.log(max);
      // console.log(xLabels);
      this.chartData.datasets = datasets;
      this.chartData.labels = xLabels;
    },
  },
};
</script>

<style scoped>
.detail-basics {
  margin-top: 2px;
  height: auto;
  width: 100% !important;

  padding: 15px 15px;

  background-color: #f9f9f9;
  font-size: 13px;
}

.recent-price h4,
.recent-price h6 {
  color: #5e89fb;
  margin-bottom: 1px;
}
.recent-price h6 {
  font-size: 14px !important;
}

.record-card {
  margin-top: 2px;
  height: auto;
  width: 100% !important;

  padding: 18px 15px;

  background-color: #f9f9f9;
  font-size: 13px;
}
</style>
