<template>
  <div>
    <div class="detail-basics recent-price">
      <h6>최근 실거래가</h6>
      <h4>{{ $filters.price(recentDeal.dealAmount) }}원</h4>
    </div>

    <div class="detail-basics" height="300px">
      <h6><i class="material-icons">trending_up</i>&nbsp;최근 3년간 월별 평균 실거래가</h6>
      <LineChart :chart-data="chartData" :chart-options="chartOptions" />
    </div>

    <div class="detail-basics">
      <h6><i class="material-icons">checklist_rtl</i>&nbsp;최근 매매 실거래가</h6>
      <table class="table">
        <colgroup>
          <col width="20%" />
          <col width="80%" />
        </colgroup>
        <thead>
          <tr>
            <th>계약일시</th>
            <th>매매가</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(deal, index) in dealList" :key="index">
            <td>{{ deal.dealYear }}년 {{ deal.dealMonth }}월</td>
            <td>
              {{ $filters.price(deal.dealAmount) }}원 ({{ deal.area }}m<sup>2</sup>,
              {{ deal.floor }}층)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {
  getAptDealRecordsWithPage,
  getAptDealRecordMonthlyAvgByArea,
} from "@/api/modules/location";

import LineChart from "../../../common/chartjs/LineChart.vue";

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
  watch: {
    aptCode() {
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
          this.areas = Object.getOwnPropertyNames(this.avgList);
          this.setChartData(this.areas[0]);
        },
        (error) => {
          console.log(error);
        }
      );
    },
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
        this.areas = Object.getOwnPropertyNames(this.avgList);
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
          label: "평균가",
          data: avg,
          borderColor: "#fdc434",
          backgroundColor: "rgba(253, 196, 52, 0.2)",
          order: 1,
        },

        {
          label: "상한가",
          fill: "+1",
          data: max,
          borderColor: "#5e89fb",
          backgroundColor: "rgba(94, 137, 251, 0.2)",
          order: 2,
        },
        {
          label: "하한가",
          data: min,
          fill: true,

          borderColor: "#5e89fb",
          backgroundColor: "#FFFFFF00",
          order: 3,
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
  padding: 10px 10px;
  text-align: center;
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
