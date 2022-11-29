<template>
  <div class="search-result-container">
    <article v-for="(apt, index) in apts" :key="index" :value="apt.aptCode">
      <p class="apt-name" @click="getAptDetail(apt.aptCode)">{{ apt.aptName }}</p>
      <p class="apt-details"><i class="bi bi-geo-alt-fill"></i> {{ apt.fullRoadAddress }}</p>
      <p class="apt-details"><i class="bi bi-building-fill-gear"></i> {{ apt.buildYear }}년</p>
    </article>
  </div>
</template>

<script>
import { getAptsByDong } from "@/api/modules/location";

export default {
  props: ["dongCode"],

  data() {
    return {
      apts: [],
    };
  },

  watch: {
    dongCode() {
      this.getAptsByDong(
        this.dongCode,
        ({ data }) => {
          this.apts = data;
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },

  mounted() {},

  created() {
    this.getAptsByDong(
      this.dongCode,
      ({ data }) => {
        this.apts = data;
      },
      (error) => {
        console.log(error);
      }
    );
  },

  methods: {
    getAptsByDong,
    getAptDetail(aptCode) {
      this.$router.push({ name: "detail", params: { aptCode: `${aptCode}` } });
    },
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

/* ::-webkit-scrollbar {
  display: none;
} */

.search-result-container article {
  background-color: #fff;
  padding: 10px 15px;
  margin-top: 2px;
  height: auto;
  width: 100% !important;
}

.name-container {
  position: relative;
  height: auto;
  width: 100% !important;

  padding-top: 16px;
  padding-bottom: 11.2px;
  padding-right: 16px;
  padding-left: 20px;

  background-color: #f9f9f9;
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

p.apt-name:hover {
  color: #5e89fb;
  text-decoration: none;
  cursor: pointer;
}
</style>
