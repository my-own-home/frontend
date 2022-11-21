<template>
  <div id="stop-scrolling">
    <!-- Navbar -->
    <div class="navbar-container">
      <navbar-common light></navbar-common>
    </div>

    <!-- Search Box -->
    <div class="searchbox-float">
      <div class="search-menu d-flex justify-content-center">
        <ul class="nav nav-tabs" id="search-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              type="button"
              id="dong-search-tab"
              data-bs-toggle="tab"
              data-bs-target="#dong-search"
              role="tab"
            >
              동별 검색
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              type="button"
              id="keyword-search-tab"
              data-bs-toggle="tab"
              data-bs-target="#keyword-search"
              role="tab"
            >
              키워드 검색
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="dong-search" role="tabpanel">
          <search-box-dong
            @receiveDongSearch="receiveDongSearch"
            @openSideBar="openSideBar"
          ></search-box-dong>
        </div>
        <div class="tab-pane fade show" id="keyword-search" role="tabpanel">
          <search-box-keyword></search-box-keyword>
        </div>
      </div>
    </div>

    <!-- Kakao Map -->
    <search-map :searchDong="searchDong" :searchKeyword="searchKeyword"></search-map>

    <!-- Side Bar -->
    <search-side-bar></search-side-bar>
  </div>
</template>

<script>
import NavbarCommon from "@/components/common/navbar/NavbarCommon.vue";
import SearchMap from "../components/search/SearchMap.vue";
import NavbarSearch from "@/components/common/navbar/NavbarSearchView.vue";
// import SearchBar from "@/components/search/searchbox/SearchBarView.vue";
import SearchBoxDong from "@/components/search/searchbox/SearchBoxDong.vue";
import SearchBoxKeyword from "@/components/search/searchbox/SearchBoxKeyword.vue";
import SearchSideBar from "@/components/search/SearchSideBar.vue";

export default {
  name: "SearchView",

  components: {
    NavbarCommon,
    NavbarSearch,
    SearchMap,
    SearchBoxDong,
    SearchBoxKeyword,
    SearchSideBar,
    // Offcanvas,
  },

  data() {
    return {
      searchDong: "",
      searchKeyword: "",
    };
  },

  mounted() {
    console.log("appsearch mounted");
  },

  methods: {
    receiveDongSearch(dongCode) {
      this.searchDong = dongCode;
      console.log(`receive dong search ${this.searchDong}`);
    },

    openSideBar() {},
  },
};
</script>

<style scoped>
.stop-scrolling {
  position: absolute;
  height: 100%;
  overflow: hidden !important;
  overflow-y: hidden; /* Hide vertical scrollbar */
}

.searchbox-float {
  position: absolute;
  top: 10%;
  left: 35%;
  width: 500px;
  padding: 10px;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  font-size: 15px;
}

.search-menu {
  margin-bottom: 0.1rem;
}
.search-menu > * {
  /* margin: 0.5rem 0.5rem; */
  margin: 0 0.5rem;
  padding: 0 0;
  /* color: #fff; */
}

.nav-item {
  background-color: transparent;
}

.nav-item :not(.active) {
  color: #fff;
}
.nav-item > .active {
  /* background-color: #f9f9f9 !important; */
  border-top: 0 !important;
  border-right: 0 !important;
  border-left: 0 !important;
  border-bottom: 2px #3a86ff solid !important;
  color: #3a86ff !important;
  font-weight: 600;
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
