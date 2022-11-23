<template>
  <div>
    <div class="detail-basics recent-price">
      <h6>최근 (평균) TODO 실거래가</h6>
      <!-- : {{ recentDeal.area }}m<sup>2</sup> -->
      <h4>{{ $filters.price(recentDeal.dealAmount) }}원</h4>
    </div>

    <div class="record-card" height="400px">
      거래가 차트
      <LineChart :chart-data="chartData" :chart-options="chartOptions" />
    </div>
    <div class="record-card">실거래가 내역 (최근 5개만 보여주기)</div>
  </div>
</template>

<script>
import {
  getAptDealRecordsWithPage,
  getAptDealRecordMonthlyAvgByArea,
} from "@/api/modules/location";

import LineChart from "./LineChart.vue";

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
        console.log("getAptDealRecordMonthlyAvgByArea");
        console.log(this.avgList);
        this.areas = Object.getOwnPropertyNames(this.avgList);
        console.log(this.areas[0]);
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

      console.log(dataSet);

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

    getRecordYMRange(areas) {
      // get year.month range
      let startYM = {
        year: avgList[areas[0]][0].dealYear,
        month: avgList[areas[0]][0].dealMonth,
      };

      let endYM = {
        year: avgList[areas[0]][avgList[areas[0]].length - 1].dealYear,
        month: avgList[areas[0]][avgList[areas[0]].length - 1].dealMonth,
      };

      for (const area in areas) {
        let start = {
          year: avgList[area][0].dealYear,
          month: avgList[area][0].dealMonth,
        };

        let end = {
          year: avgList[area][avgList[area].length - 1].dealYear,
          month: avgList[area][avgList[area].length - 1].dealMonth,
        };

        if (start.year < startYM.year) {
          startYM.year = start.year;
          startYM.month = start.month;
        } else if (start.year == startYM.year && start.month < startYM.month) {
          startYM.month = start.month;
        }

        if (end.year > endYM.year) {
          endYM.year = end.year;
          endYM.month = end.month;
        } else if (end.year == endYM.year && end.month > endYM.month) {
          endYM.month = end.month;
        }
      }

      let ymRange = [];
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
h6 {
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
