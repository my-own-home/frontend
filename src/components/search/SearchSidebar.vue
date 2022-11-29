<template>
  <div class="search-result-container">
    <router-view></router-view>
  </div>
</template>

<script>
const SERVICE_KEY = import.meta.env.VITE_HOUSE_MATCH_KAKAO_MAP_API_KEY;

export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {},
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
  padding-bottom: 100px;
}
#roadview {
  width: auto;
  height: 300px;
}

.result-inner-menu {
  position: sticky;
  top: 0;
  background-color: #ced4da;
}
</style>
