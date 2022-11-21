<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

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
  light: {
    type: Boolean,
    default: false,
  },
  dark: {
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
<template>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3': props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark,
    }"
  >
    <div
      :class="props.transparent || props.light || props.dark ? 'container' : 'container-fluid px-0'"
    >
      <RouterLink
        class="navbar-brand d-none d-md-block logo"
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
        아파트{{ userInfo }}
      </RouterLink>
      <RouterLink
        class="navbar-brand d-block d-md-none"
        :class="props.transparent || props.dark ? 'text-white' : 'font-weight-bolder ms-sm-3'"
        to="/"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        Material Design
      </RouterLink>

      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuDocs"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="material-icons opacity-6 me-2" :class="getTextColor()">account_circle</i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-sm mt-0 mt-lg-3 p-3 border-radius-lg"
              aria-labelledby="dropdownMenuDocs"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group text-right">
                  <li class="nav-item list-group-item border-0 p-0">
                    <RouterLink class="dropdown-item py-2 ps-3 border-radius-md" to="#">
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-center align-items-center p-0"
                      >
                        회원 가입
                      </h6>
                    </RouterLink>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <RouterLink class="dropdown-item py-2 ps-3 border-radius-md" to="#">
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-center align-items-center p-0"
                      >
                        로그인
                      </h6>
                    </RouterLink>
                  </li>

                  <li class="nav-item list-group-item border-0 p-0 border-top-black">
                    <RouterLink class="dropdown-item py-2 ps-3 border-radius-md" to="#">
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-center align-items-center p-0"
                      >
                        공지사항
                      </h6>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="row d-lg-none">
                <div class="col-md-12 g-0">
                  <ul class="list-group text-right">
                    <li class="nav-item list-group-item border-0 p-0">
                      <RouterLink class="dropdown-item py-2 ps-3 border-radius-md" to="#">
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-center align-items-center p-0"
                        >
                          회원 가입
                        </h6>
                      </RouterLink>
                    </li>
                    <li class="nav-item list-group-item border-0 p-0">
                      <RouterLink class="dropdown-item py-2 ps-3 border-radius-md" to="#">
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-center align-items-center p-0"
                        >
                          로그인
                        </h6>
                      </RouterLink>
                    </li>

                    <li class="nav-item list-group-item border-0 p-0 border-top-black">
                      <RouterLink class="dropdown-item py-2 ps-3 border-radius-md" to="#">
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-center align-items-center p-0"
                        >
                          공지사항
                        </h6>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- <div class="row d-lg-none">
                <div class="col-md-12 g-0">
                  <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Getting Started
                    </h6>
                    <span class="text-sm"
                      >All about overview, quick start, license and contents</span
                    >
                  </a>
                  <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Foundation
                    </h6>
                    <span class="text-sm">See our colors, icons and typography</span>
                  </a>
                  <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Components
                    </h6>
                    <span class="text-sm">Explore our collection of fully designed components</span>
                  </a>
                  <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Plugins
                    </h6>
                    <span class="text-sm">Check how you can integrate our plugins</span>
                  </a>
                  <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Utility Classes
                    </h6>
                    <span class="text-sm"
                      >For those who want flexibility, use our utility classes</span
                    >
                  </a>
                </div>
              </div> -->
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";

const userStore = "userStore";

export default {
  name: "NavbarCommon",
  data() {
    return {};
  },
  computed: {
    ...mapState(userStore, ["isLogin", "userInfo"]),
    ...mapGetters(["checkUserInfo"]),
  },
  methods: {
    ...mapActions(userStore, ["userLogout"]),
    onClickLogout() {
      console.log(this.userInfo.userid);
      this.userLogout(this.userInfo.userid);
      sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
      sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
      if (this.$route.path != "/") this.$router.push({ name: "main" });
    },
  },
};
</script>
<style scoped>
.material-icons {
  font-size: 27px;
}
.logo {
  font-size: 16px;
}
.list-group > :last-child {
  border-top: 0.5px rgba(128, 128, 128, 0.594) solid !important;
}
</style>
