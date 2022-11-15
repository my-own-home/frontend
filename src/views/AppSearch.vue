<template>
  <div id="stop-scrolling">
    <default-navbar sticky></default-navbar>
    <search-map></search-map>
  </div>
</template>

<script>
import SearchMap from "../components/search/SearchMap.vue";
import DefaultNavbar from "../examples/navbars/NavbarDefault.vue";

export default {
  name: "SearchView",

  components: { DefaultNavbar, SearchMap },

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
