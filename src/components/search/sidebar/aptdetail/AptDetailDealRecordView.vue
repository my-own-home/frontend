<template>
  <div>
    <div class="detail-basics recent-price">
      <h6>최근 실거래가 ({{ recentDeal.area }}m<sup>2</sup>)</h6>
      <h4>{{ $filters.price(recentDeal.dealAmount) }}원</h4>
    </div>

    <div v-if="Object.keys(avgList).length > 0">
      <div class="detail-basics" height="300px">
        <div class="d-flex justify-content-between">
          <h6 class="col-8">
            <i class="material-icons">trending_up</i>&nbsp;최근 3년간 월별 평균 실거래가
          </h6>
          <select v-model="currArea" class="form-control">
            <option v-for="(area, index) in areas" :key="index" :value="area">
              {{ area }} m<sup>2</sup>
            </option>
          </select>
        </div>
        <LineChart :chart-data="chartData" :chart-options="chartOptions" />
      </div>
    </div>

    <div v-else>
      <div class="detail-basics" height="300px">
        <div class="d-flex justify-content-between">
          <h6 class="col-8">
            <i class="material-icons">trending_up</i>&nbsp;최근 3년간 월별 평균 실거래가
          </h6>
        </div>
        <p class="none-alert">최근 3년간 실거래가 내역이 없습니다.</p>
      </div>
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
      currArea: "",
      chartData: {
        labels: "",
        datasets: [],
      },
      chartOptions: {},
    };
  },
  watch: {
    aptCode() {
      this.initView();
    },

    currArea(val) {
      this.setChartData(val);
    },
  },

  created() {},

  mounted() {
    this.initView();
  },

  methods: {
    getAptDealRecordsWithPage,
    getAptDealRecordMonthlyAvgByArea,

    initView() {
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
          this.areas = Object.getOwnPropertyNames(this.avgList).sort((a, b) => a - b);
          this.currArea = this.areas[0];
          this.setChartData(this.areas[0]);
        },
        (error) => {
          console.log(error);
        }
      );
    },

    setChartData(area) {
      let dataSet = this.avgList[area];
      let xLabels = [];
      let min = [];
      let max = [];
      let avg = [];

      if (dataSet) {
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

        this.chartData.datasets = datasets;
        this.chartData.labels = xLabels;
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  padding: 0 20px;
}

select {
  text-align: right;
  text-align-last: right;
  font-size: inherit;
  cursor: pointer;
  border-radius: 110px;

  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
  background: url("@/assets/img/profiles/blue-arrow.svg") no-repeat 100% 50%/15px auto;
}

option {
  cursor: pointer;
  padding: 5px 0;
  border-radius: 110px;
}

.none-alert {
  padding-left: 5px;
  margin: 0 0;
  font-size: 14px;
  color: #344767;
}
.detail-basics {
  margin-top: 2px;
  height: auto;
  width: 100% !important;

  padding: 15px 15px;

  background-color: #fff;
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

  background-color: #fff;
  font-size: 13px;
}
</style>
