<template>
  <div class="container">
    <!-- 동별 검색, 키워드 검색 나누기 -->
    <div class="search-menu d-flex justify-content-center">
      <div>
        <input type="radio" id="dong-search" name="search-option" value="dong" checked="checked" />
        <label for="dong-search">동별 검색</label>
      </div>
      <div>
        <input type="radio" id="keyword-search" name="search-option" value="keyword" />
        <label for="keyword-search">키워드 검색</label>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  components: { RouterLink, RouterView },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.search-menu {
  margin-bottom: 0.1rem;
}
.search-menu > * {
  /* margin: 0.5rem 0.5rem; */
  margin: 0 0.5rem;
  padding: 0 0;
  /* color: #fff; */
}

input[type="radio"] {
  display: none;
}

input[type="radio"]:checked + label {
  /* border-bottom: 1px solid #fff; */
  border-bottom: 3px solid pink;
  cursor: default;
}

label {
  font-size: inherit;
}

label:hover {
  border-bottom: 3px solid pink;
  cursor: pointer;
}
</style>
