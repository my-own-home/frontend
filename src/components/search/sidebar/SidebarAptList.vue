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

  mounted() {},

  created() {
    console.log("Sidebarrrrrrr dongCOde" + this.dongCode);
    this.getAptsByDong(this.dongCode).then(({ data }) => {
      this.apts = data;
    });
  },

  methods: {
    getAptsByDong,
    getAptDetail(aptCode) {
      this.$router.push(`/search/detail/${aptCode}`);
    },
  },

  watch: {
    dongCode() {
      this.getAptsByDong(this.dongCode).then(({ data }) => {
        this.apts = data;
      });
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

.search-result-container > article {
  background-color: #f9f9f9;
  padding: 10px 15px;
  margin-top: 2px;
  height: auto;
  width: 100% !important;
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
  color: var(--bs-link-hover-color);
  text-decoration: none;
  cursor: pointer;
}
</style>
