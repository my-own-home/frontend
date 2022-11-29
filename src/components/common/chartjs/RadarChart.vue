<template>
  <Radar :chart-data="chartData" :chart-options="chartOptions" />
</template>

<script>
import { Radar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement);
ChartJS.defaults.font.family = "NanumSquareNeo, Roboto, Helvetica, Arial, sans-serif";

export default {
  name: "RadarChart",
  components: { Radar },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    charData(val) {
      // console.log(val);
    },
  },
  created() {
    // console.log("created radarchart");
  },
};
</script>
