<template>
  <div id="stop-scrolling">
    <!-- <navbar-search sticky></navbar-search> -->
    <search-map></search-map>

    <!-- <search-bar class="search-card"></search-bar> -->
  </div>
</template>

<script>
import SearchMap from "../components/search/SearchMap.vue";
import NavbarSearch from "@/components/common/navbar/NavbarSearchView.vue";
import SearchBar from "@/components/search/searchbar/SearchBarView.vue";

export default {
  name: "SearchView",

  components: { NavbarSearch, SearchMap, SearchBar },

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

.card {
  position: absolute;
  top: 100px;
  left: 100px;
  width: 400px;
  padding: 10px;
  z-index: 100;
  /* background-color: rgba(255, 255, 255, 0.7); */
  background-color: black;
  overflow-y: auto;
}
</style>
