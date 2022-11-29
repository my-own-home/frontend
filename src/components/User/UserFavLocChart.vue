<template>
  <div>
    <div class="detail-basics">
      <h6><i class="material-icons">trending_up</i>최근 1년간 월별 매매가격지수</h6>
      <LineChart :chart-data="chartData" :chart-options="chartOptions" />
    </div>

    <div class="record-card">
      <p class="mb-1">매매가격지수란?</p>
      2015년 6월 당시 해당지역 아파트 평균 가격을 기준(100)으로 삼고 이후 상승 또는 하락 정도를 쉽게
      알 수 있도록 측정한 값
    </div>
  </div>
</template>

<script>
import { getAptDealJisu } from "@/api/modules/location";

import LineChart from "@/components/common/chartjs/LineChart.vue";

export default {
  components: { LineChart },

  props: ["idx", "sido", "gugun", "dong"],

  data() {
    return {
      dealJisuList: [],
      chartData: {
        labels: "",
        datasets: [],
      },
      chartOptions: {},
    };
  },
  watch: {
    idx(val) {
      // console.log(val);
      this.getAptDealJisu(
        this.gugun,
        ({ data }) => {
          this.dealJisuList = data.dealJisu;
          this.setChartData();
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
  created() {
    this.getAptDealJisu(
      this.gugun,
      ({ data }) => {
        this.dealJisuList = data.dealJisu;
        this.setChartData();
      },
      (error) => {
        console.log(error);
      }
    );
  },

  methods: {
    getAptDealJisu,

    setChartData() {
      let dataSet = this.dealJisuList;
      let data = [];
      let xLabel = [
        "nov21",
        "dec21",
        "jan22",
        "feb22",
        "mar22",
        "apr22",
        "may22",
        "jun22",
        "jul22",
        "aug22",
        "sep22",
        "oct22",
      ];
      for (let index = 0; index < xLabel.length; index++) {
        data.push(dataSet[xLabel[index]]);
      }
      // console.log(data);

      this.chartData.labels = [
        "21-11",
        "21-12",
        "22-01",
        "22-02",
        "22-03",
        "22-04",
        "22-05",
        "22-06",
        "22-07",
        "22-08",
        "22-09",
        "22-10",
      ];

      let datasets = [
        {
          label: this.sido + " " + this.gugun + " " + this.dong,
          fill: "+1",
          data: data,
          borderColor: "#5e89fb",
          // backgroundColor: "#5e88fb9d",
        },
      ];
      this.chartData.datasets = datasets;
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

.record-card {
  margin-top: 2px;
  height: auto;
  width: 100% !important;

  padding: 18px 15px;

  background-color: #f9f9f9;
  font-size: 13px;
}
</style>
