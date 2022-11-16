<template>
  <div class="name-container col-lg-8 col-md-6 col-12 my-auto">
      <h4 class="mb-1">청운현대</h4>
      <p class="mb-0">서울시 종로구 어쩌구저쩌구길121313</p>
      <p class="mb-0">192세대/3동/2011.09/면적</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.name-container {
  position: sticky;
  top: 0;
  height: auto;
  width: 100% !important;

  padding-top: 1rem;
  padding-bottom: 0.7rem;
  padding-right: 1rem;
  padding-left: 1rem;

  background-color: #f9f9f9;
}

.name-container > p {
  font-size: 0.9rem !important;
}
</style>
