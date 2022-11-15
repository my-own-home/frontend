<template>
  <div id="bg-map" class="background-map"></div>
</template>

<script>
export default {
  name: "SearchMap",

  data() {
    return {
      map: null,
      center: null,
      locations: [],
      markers: [],
      geocoder: null,
      infowindow: null,
    };
  },

  methods: {
    setCenter() {
      this.center;
    },
  },

  mounted() {},
};
</script>

<style scoped>
.background-map {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: aqua;
}
</style>
