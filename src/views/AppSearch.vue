<template>
  <div id="stop-scrolling">
    <!-- Navbar -->
    <div ref="navbar-ref" class="navbar-container">
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
          <search-box-dong></search-box-dong>
        </div>
        <div class="tab-pane fade show" id="keyword-search" role="tabpanel">
          <search-box-keyword></search-box-keyword>
        </div>
      </div>
    </div>

    <!-- Kakao Map -->
    <!-- @click="closeSearchBar"-->
    <search-map></search-map>
    <!-- <search-map :searchDong="searchDong" :searchKeyword="searchKeyword"></search-map> -->

    <!-- Side Bar -->

    <router-view></router-view>

    <!-- <sidebar-apt-detail></sidebar-apt-detail> -->
  </div>
</template>

<script>
import NavbarCommon from "@/components/common/navbar/NavbarCommon.vue";
import SearchMap from "../components/search/SearchMap.vue";
import SearchBoxDong from "@/components/search/searchbox/SearchBoxDong.vue";
import SearchBoxKeyword from "@/components/search/searchbox/SearchBoxKeyword.vue";
import SearchSideBar from "@/components/search/SearchSideBar.vue";
// import SidebarAptDetail from "@/components/search/sidebar/SidebarAptDetail.vue";

import { mapState, mapActions, mapMutations } from "vuex";

export default {
  components: {
    NavbarCommon,
    SearchMap,
    SearchBoxDong,
    SearchBoxKeyword,
    SearchSideBar,
  },

  data() {
    return {};
  },

  created() {
    console.log("AppSearch created..");
  },

  mounted() {},

  methods: {
    openSideBar() {
      this.showSidebar = true;
    },

    closeSearchBar() {
      this.showSidebar = false;
    },
  },
};
</script>

<style scoped>
#stop-scrolling {
  /* position: relative; */
  width: 100%;
  /* Hide vertical scrollbar */
  overflow: hidden !important;
  overflow-y: hidden;
}
.searchbox-float {
  position: absolute;
  top: 8%;
  left: 35%;
  width: 450px;
  padding: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  font-size: 15px;
}

.form-control {
  padding: 0 0;
}

.search-options {
  display: flex;
  align-items: center;
  text-align: center;
  height: 40px;
  width: 450px;
  margin: auto;
  /* background-color: #ffffff; */
  background-color: pink;
  border-radius: 110px;
  justify-content: center;
}

.search-options > :nth-last-child(2) {
  border: none;
}

.search-option {
  width: 8.5rem;
  border-right: 1px solid #dadada;
}

.search-option:hover {
  cursor: pointer;
  padding: 5px 0;
  background-color: #e7e7e7;
  border-radius: 110px;
}

select {
  text-align: center;
  text-align-last: center;
  /* border: 1px solid black; */
  font-size: inherit;
  cursor: pointer;
}

.btn {
  margin: 0 auto;
  font-size: 10px;
  width: 10px;
  padding-left: 15px;
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
