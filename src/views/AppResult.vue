<template>
  <div class="stop-scrolling">
    <navbar-search sticky></navbar-search>
    <div class="row result-container">
      <search-result></search-result>
      <search-map></search-map>
    </div>
  </div>
</template>

<script>
import SearchMap from "../components/search/SearchMap.vue";
import SearchResult from "../components/search/SearchResult.vue";
import NavbarSearch from "@/components/common/NavbarSearch.vue";

export default {
  name: "SearchView",

  components: { NavbarSearch, SearchMap, SearchResult },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.stop-scrolling {
  height: 100%;
  overflow: hidden !important;
  overflow-y: hidden; /* Hide vertical scrollbar */
}

.row {
  margin: 0;
  padding: 0;
}

.result-container {
  margin-top: 72px;
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
