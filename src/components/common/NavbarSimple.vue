<template>
  <div>
    <nav
      class="navbar navbar-expand-lg position-fixed top-0 z-index-3 w-100 shadow-none start-0 end-0 navbar-pd"
      :class="{
        'navbar-transparent my-3': props.transparent,
        'navbar-light': props.sticky,
      }"
    >
      <div class="container-fluid px-0">
        <!-- navbar brand -->
        <rounter-link
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
        </rounter-link>
        <rounter-link
          class="navbar-brand d-block d-md-none"
          :class="props.transparent || props.dark ? 'text-white' : 'font-weight-bolder ms-sm-3'"
          to="/"
          rel="tooltip"
          title="Designed and Coded by Creative Tim"
          data-placement="bottom"
        >
          아파트 실거래가
        </rounter-link>
        
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
                id="dropdownMenuPages"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()"
                  >dashboard</i
                >
                Pages
                <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
                <img
                  :src="getArrowColor()"
                  alt="down-arrow"
                  class="arrow ms-1 d-lg-none d-block ms-auto"
                />
              </a>
              <div
                class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
                aria-labelledby="dropdownMenuPages"
              >
                <div class="row d-none d-lg-block">
                  <div class="col-12 px-4 py-2">
                    <div class="row">
                      <div class="position-relative">
                        <div
                          class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1"
                        >
                          Landing Pages
                        </div>
                        <rounter-link :to="{ name: 'about' }" class="dropdown-item border-radius-md">
                          <span>About Us</span>
                        </rounter-link>
                        <rounter-link
                          :to="{ name: 'contactus' }"
                          class="dropdown-item border-radius-md"
                        >
                          <span>Contact Us</span>
                        </rounter-link>
                        <rounter-link :to="{ name: 'author' }" class="dropdown-item border-radius-md">
                          <span>Author</span>
                        </rounter-link>
                        <div
                          class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3"
                        >
                          Account
                        </div>
                        <rounter-link
                          :to="{ name: 'signin-basic' }"
                          class="dropdown-item border-radius-md"
                        >
                          <span>Sign In</span>
                        </rounter-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-lg-none">
                  <div
                    class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0"
                  >
                    Landing Pages
                  </div>
                  <rounter-link :to="{ name: 'about' }" class="dropdown-item border-radius-md">
                    <span>About Us</span>
                  </rounter-link>
                  <rounter-link :to="{ name: 'contactus' }" class="dropdown-item border-radius-md">
                    <span>Contact Us</span>
                  </rounter-link>
                  <rounter-link :to="{ name: 'author' }" class="dropdown-item border-radius-md">
                    <span>Author</span>
                  </rounter-link>
                  <div
                    class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3"
                  >
                    Account
                  </div>
                  <rounter-link :to="{ name: 'signin-basic' }" class="dropdown-item border-radius-md">
                    <span>Sign In</span>
                  </rounter-link>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown dropdown-hover mx-2">
              <a
                role="button"
                class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                :class="getTextColor()"
                id="dropdownMenuBlocks"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()"
                  >view_day</i
                >
                Sections
                <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
                <img
                  :src="getArrowColor()"
                  alt="down-arrow"
                  class="arrow ms-1 d-lg-none d-block ms-auto"
                />
              </a>
              <div
                class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
                aria-labelledby="dropdownMenuBlocks"
              >
                <div class="d-none d-lg-block">
                  <ul class="list-group">
                    <li
                      class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                    >
                      <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                        <div class="d-flex">
                          <div class="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6
                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                              >
                                Page Sections
                              </h6>
                              <span class="text-sm">See all sections</span>
                            </div>
                            <img :src="downArrow" alt="down-arrow" class="arrow" />
                          </div>
                        </div>
                      </a>
                      <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'page-headers' }"
                        >
                          Page Headers
                        </rounter-link>
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'page-features' }"
                        >
                          Features
                        </rounter-link>
                      </div>
                    </li>
                    <li
                      class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                    >
                      <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                        <div class="d-flex">
                          <div class="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6
                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                              >
                                Navigation
                              </h6>
                              <span class="text-sm">See all navigations</span>
                            </div>
                            <img :src="downArrow" alt="down-arrow" class="arrow" />
                          </div>
                        </div>
                      </a>
                      <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'navigation-navbars' }"
                        >
                          Navbars
                        </rounter-link>
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'navigation-navtabs' }"
                        >
                          Nav Tabs
                        </rounter-link>
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'navigation-pagination' }"
                        >
                          Pagination
                        </rounter-link>
                      </div>
                    </li>
                    <li
                      class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                    >
                      <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                        <div class="d-flex">
                          <div class="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6
                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                              >
                                Input Areas
                              </h6>
                              <span class="text-sm">See all input areas</span>
                            </div>
                            <img :src="downArrow" alt="down-arrow" class="arrow" />
                          </div>
                        </div>
                      </a>
                      <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'inputareas-inputs' }"
                        >
                          Inputs
                        </rounter-link>
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'inputareas-forms' }"
                        >
                          Forms
                        </rounter-link>
                      </div>
                    </li>
                    <li
                      class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                    >
                      <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                        <div class="d-flex">
                          <div class="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6
                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                              >
                                Attention Catchers
                              </h6>
                              <span class="text-sm">See all examples</span>
                            </div>
                            <img :src="downArrow" alt="down-arrow" class="arrow" />
                          </div>
                        </div>
                      </a>
                      <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'ac-alerts' }"
                        >
                          Alerts
                        </rounter-link>
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'ac-modals' }"
                        >
                          Modals
                        </rounter-link>
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'ac-tooltips-popovers' }"
                        >
                          Tooltips & Popovers
                        </rounter-link>
                      </div>
                    </li>
                    <li
                      class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                    >
                      <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                        <div class="d-flex">
                          <div class="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6
                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                              >
                                Elements
                              </h6>
                              <span class="text-sm">See all elements</span>
                            </div>
                            <img :src="downArrow" alt="down-arrow" class="arrow" />
                          </div>
                        </div>
                      </a>
                      <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'el-avatars' }"
                        >
                          Avatars
                        </rounter-link>
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'el-badges' }"
                        >
                          Badges
                        </rounter-link>
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'el-breadcrumbs' }"
                        >
                          Breadcrumbs
                        </rounter-link>
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'el-buttons' }"
                        >
                          Buttons
                        </rounter-link>
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'el-button-groups' }"
                        >
                          Button Groups
                        </rounter-link>
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'el-dropdowns' }"
                        >
                          Dropdowns
                        </rounter-link>
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'el-progress-bars' }"
                        >
                          Progress Bars
                        </rounter-link>
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'el-toggles' }"
                        >
                          Toggles
                        </rounter-link>
                        <rounter-link
                          class="dropdown-item ps-3 border-radius-md mb-1"
                          :to="{ name: 'el-typography' }"
                        >
                          Typography
                        </rounter-link>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="row d-lg-none">
                  <div class="col-md-12">
                    <div class="d-flex mb-2">
                      <div class="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6
                            class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                          >
                            Page Sections
                          </h6>
                        </div>
                      </div>
                    </div>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'page-headers' }"
                    >
                      Page Headers
                    </rounter-link>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'page-features' }"
                    >
                      Features
                    </rounter-link>
                    <div class="d-flex mb-2 mt-3">
                      <div class="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6
                            class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                          >
                            Navigation
                          </h6>
                        </div>
                      </div>
                    </div>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'navigation-navbars' }"
                    >
                      Navbars
                    </rounter-link>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'navigation-navtabs' }"
                    >
                      Nav Tabs
                    </rounter-link>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'navigation-pagination' }"
                    >
                      Pagination
                    </rounter-link>
                    <div class="d-flex mb-2 mt-3">
                      <div class="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6
                            class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                          >
                            Input Areas
                          </h6>
                        </div>
                      </div>
                    </div>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'inputareas-inputs' }"
                    >
                      Inputs
                    </rounter-link>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'inputareas-forms' }"
                    >
                      Forms
                    </rounter-link>
                    <div class="d-flex mb-2 mt-3">
                      <div class="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6
                            class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                          >
                            Attention Catchers
                          </h6>
                        </div>
                      </div>
                    </div>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'ac-alerts' }"
                    >
                      Alerts
                    </rounter-link>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'ac-modals' }"
                    >
                      Modals
                    </rounter-link>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'ac-tooltips-popovers' }"
                    >
                      Tooltips & Popovers
                    </rounter-link>
                    <div class="d-flex mb-2 mt-3">
                      <div class="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6
                            class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                          >
                            Elements
                          </h6>
                        </div>
                      </div>
                    </div>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'el-avatars' }"
                    >
                      Avatars
                    </rounter-link>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'el-badges' }"
                    >
                      Badges
                    </rounter-link>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'el-breadcrumbs' }"
                    >
                      Breadcrumbs
                    </rounter-link>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'el-buttons' }"
                    >
                      Buttons
                    </rounter-link>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'el-button-groups' }"
                    >
                      Button Groups
                    </rounter-link>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'el-dropdowns' }"
                    >
                      Dropdowns
                    </rounter-link>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'el-progress-bars' }"
                    >
                      Progress Bars
                    </rounter-link>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'el-toggles' }"
                    >
                      Toggles
                    </rounter-link>
                    <rounter-link
                      class="dropdown-item ps-3 border-radius-md mb-1"
                      :to="{ name: 'el-typography' }"
                    >
                      Typography
                    </rounter-link>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown dropdown-hover mx-2">
              <a
                role="button"
                class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                :class="getTextColor()"
                id="dropdownMenuDocs"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">article</i>
                Docs
                <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
                <img
                  :src="getArrowColor()"
                  alt="down-arrow"
                  class="arrow ms-1 d-lg-none d-block ms-auto"
                />
              </a>
              <div
                class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg"
                aria-labelledby="dropdownMenuDocs"
              >
                <div class="d-none d-lg-block">
                  <ul class="list-group">
                    <li class="nav-item list-group-item border-0 p-0">
                      <a
                        class="dropdown-item py-2 ps-3 border-radius-md"
                        href=" https://www.creative-tim.com/learning-lab/vue/overview/material-kit/"
                      >
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Getting Started
                        </h6>
                        <span class="text-sm"
                          >All about overview, quick start, license and contents</span
                        >
                      </a>
                    </li>
                    <li class="nav-item list-group-item border-0 p-0">
                      <a
                        class="dropdown-item py-2 ps-3 border-radius-md"
                        href=" https://www.creative-tim.com/learning-lab/vue/colors/material-kit/"
                      >
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Foundation
                        </h6>
                        <span class="text-sm">See our colors, icons and typography</span>
                      </a>
                    </li>
                    <li class="nav-item list-group-item border-0 p-0">
                      <a
                        class="dropdown-item py-2 ps-3 border-radius-md"
                        href=" https://www.creative-tim.com/learning-lab/vue/alerts/material-kit/"
                      >
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Components
                        </h6>
                        <span class="text-sm"
                          >Explore our collection of fully designed components</span
                        >
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="row d-lg-none">
                  <div class="col-md-12 g-0">
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="./pages/about-us.html"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Getting Started
                      </h6>
                      <span class="text-sm"
                        >All about overview, quick start, license and contents</span
                      >
                    </a>
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="./pages/about-us.html"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Foundation
                      </h6>
                      <span class="text-sm">See our colors, icons and typography</span>
                    </a>
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="./pages/about-us.html"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Components
                      </h6>
                      <span class="text-sm"
                        >Explore our collection of fully designed components</span
                      >
                    </a>
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="./pages/about-us.html"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Plugins
                      </h6>
                      <span class="text-sm">Check how you can integrate our plugins</span>
                    </a>
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="./pages/about-us.html"
                    >
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
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <!-- End Navbar -->
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

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
  font-size: 20px;
}
.navbar-pd {
  padding: 1rem 1.5rem;
}

.navbar-brand {
  padding-top: 5px;
  padding-bottom: 0;
  font-size: 1.4rem !important;
}
</style>
