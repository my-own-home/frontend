<template>
  <div>
    <div class="detail-basics" height="350px" style="position: relative">
      <RadarChart :chart-data="chartData" :chart-options="chartOptions" />
    </div>

    <div class="record-card">
      <h6><i class="material-icons">forum</i> 아파트 이야기</h6>
      교육
      <StarRating
        :star-size="20"
        v-model:rating="safety"
        inline="true"
        active-color="#5e89fb"
      ></StarRating>
      safety {{ safety }}

      <StarRating
        :star-size="20"
        v-model:rating="education"
        inline="true"
        active-color="#5e89fb"
      ></StarRating>

      <StarRating
        :star-size="20"
        v-model:rating="transport"
        inline="true"
        active-color="#5e89fb"
      ></StarRating>

      <StarRating
        :star-size="20"
        v-model:rating="nature"
        inline="true"
        active-color="#5e89fb"
      ></StarRating>

      <StarRating
        :star-size="20"
        v-model:rating="life"
        inline="true"
        active-color="#5e89fb"
      ></StarRating>
    </div>
  </div>
</template>

<script>
import { getAvgAptReview } from "@/api/modules/location";

import RadarChart from "@/components/common/chartjs/RadarChart.vue";
// @ts-ignore
import StarRating from "vue-star-rating";

export default {
  components: { RadarChart, StarRating },

  props: ["aptCode"],

  data() {
    return {
      reviewList: [],
      avgStars: null,
      navigator: null,

      // rating
      safety: 3,
      education: 3,
      transport: 3,
      nature: 3,
      life: 3,

      starSize: "20",
      step: 1.0,

      // chartjs
      chartData: {
        labels: ["안전", "교육", "환경", "교통", "생활"],
        datasets: [],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        scale: {
          r: {
            max: 5,
            min: 0,
            ticks: {
              stepSize: 1,
            },
          },
        },
      },
    };
  },

  created() {
    console.log("created AptDetail");
  },

  mounted() {
    console.log("mounted AptDetail");

    this.getAvgAptReview(
      this.aptCode,
      ({ data }) => {
        console.log(data);
        let avgs = [
          data.scoreSafety,
          data.scoreTransport,
          data.scoreNature,
          data.scoreEdu,
          data.scoreLife,
        ];

        this.chartData.datasets.push({
          label: "reviews",
          data: avgs,
          borderColor: "#5e89fb",
          backgroundColor: "#5e88fb9d",
          borderWidth: 1.5,
        });

        this.avgStars = data.score;
        console.log(this.chartData);
      },
      (error) => {
        console.log(error);
      }
    );
  },

  methods: {
    getAvgAptReview,
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
