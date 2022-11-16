<template>
  <div id="stop-scrolling">
    <navbar-search sticky></navbar-search>
    <search-map></search-map>
  </div>
</template>

<script>
import SearchMap from "../components/search/SearchMap.vue";
import NavbarSearch from "@/components/common/NavbarSearch.vue";

export default {
  name: "SearchView",

  components: { NavbarSearch, SearchMap },

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
</style>
