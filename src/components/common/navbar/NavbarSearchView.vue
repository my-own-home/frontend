<template>
  <div>
    <nav
      class="navbar navbar-expand-lg position-fixed top-0 z-index-3 w-100 start-0 end-0 navbar-pd navbar-light"
    >
      <!-- <div class="container-fluid px-0"> -->
      <div class="row d-flex justify-content-between">
        <!-- navbar brand -->
        <div class="col-lg">
          <router-link
            class="navbar-brand d-none d-md-block"
            :class="[
              (props.transparent && textDark.value) || !props.transparent
                ? 'text-dark font-weight-bolder ms-sm-3'
                : 'text-white font-weight-bolder ms-sm-3',
            ]"
            :to="{ name: 'presentation' }"
            rel="tooltip"
            title="Designed and Coded by Creative Tim"
            data-placement="bottom"
          >
            아파트 실거래가
          </router-link>
        </div>

        <!-- search bar component -->
        <!-- todo: add keyword search-->
        <div class="search-container col-lg d-none d-lg-block">
          <search-bar></search-bar>
        </div>

        <!--프로필 사진, 공지사항-->
        <div class="col-lg">
          <div class="d-flex flex-row-reverse">
            <label for="profile-nav">
              <i class="material-icons opacity-6 me-2 text-md">account_circle</i>
              <i class="material-icons opacity-6 me-2 text-md">reorder</i>
            </label>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <!-- End Navbar -->
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../../assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";
import SearchBar from "@/components/search/searchbar/SearchBarView.vue";
import InputIcon from "@/layouts/sections/input-areas/inputs/components/InputIcon.vue";
import MaterialInput from "@/components/MaterialInput.vue";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "https://www.creative-tim.com/product/vue-material-kit",
      color: "bg-gradient-success",
      label: "Free Download",
    }),
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  darkText: {
    type: Boolean,
    default: false,
  },
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop
let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>

<style scoped>
.navbar {
  /* font-size: 15px; */
  /* border-bottom: 4px solid pink; */
  box-shadow: small;
}
.navbar-pd {
  padding: 1rem 1.5rem;
}

.navbar-brand {
  padding-top: 5px;
  padding-bottom: 0;
  font-size: 1.4rem !important;
}

.search-container {
  font-size: 0.7rem;
}

.row {
  width: 100%;
  align-items: center;
}

.profile-container {
  align-content: left;
}
</style>
