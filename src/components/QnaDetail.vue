<script setup>
import { onMounted } from "vue";

// example components
// import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/components/common/Header.vue";
//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import NavbarCommon from "@/components/common/navbar/NavbarCommon.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <Header>
    <NavbarCommon transparent />
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)',
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container mt-8">
        <div class="row">
          <!-- <div class="col-lg-12 col-md-8 col-12 mx-auto"> -->
          <div class="col-lg-12">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                    Q&nbsp;&nbsp; & &nbsp;&nbsp;A
                  </h4>
                </div>
              </div>

              <div class="card-body min-vh-70 mx-6">
                <div class="container mb-3">
                  <div class="row">
                    <div class="col"></div>
                    <div class="col-lg-4 mx-auto">
                      <MaterialInput
                        class="input-group-dynamic"
                        icon="search"
                        type="text"
                        placeholder="검색어를 입력하세요"
                      />
                    </div>
                    <div style="text-align: right" class="col">
                      <button
                        type="button"
                        class="btn btn-outline-success btn-sm"
                        style="margin-right: 5%"
                      >
                        질문하기
                      </button>
                    </div>
                  </div>
                </div>
                <div class="container">
                  <div v-if="qnas.length">
                    <div
                      class="accordion"
                      id="basicAccordion"
                      v-for="(qna, index) in qnas"
                      :key="index"
                    >
                      <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingOne">
                            <button
                              class="accordion-button collapsed rounded-top mt-2"
                              type="button"
                              data-bs-toggle="collapse"
                              :data-bs-target="'#flush-collapse' + index"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              {{ qna.question }}
                            </button>
                          </h2>
                          <div
                            :id="'flush-collapse' + index"
                            class="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                            style="padding-left: 5%"
                          >
                            <div class="accordion-body">
                              {{ qna.answer }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-center" v-else>질문이 없습니다.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer position-absolute bottom-2 py-2 w-100">
        <div class="container">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-12 col-md-6 my-auto">
              <div class="copyright text-center text-sm text-white text-lg-start">
                © {{ new Date().getFullYear() }}, made with
                <i class="fa fa-heart" aria-hidden="true"></i> by
                <a
                  href="https://www.creative-tim.com"
                  class="font-weight-bold text-white"
                  target="_blank"
                  >Creative Tim</a
                >
                for a better web.
              </div>
            </div>
            <div class="col-12 col-md-6">
              <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                <li class="nav-item">
                  <a href="https://www.creative-tim.com" class="nav-link text-white" target="_blank"
                    >Creative Tim</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/presentation"
                    class="nav-link text-white"
                    target="_blank"
                    >About Us</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/blog"
                    class="nav-link text-white"
                    target="_blank"
                    >Blog</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/license"
                    class="nav-link pe-0 text-white"
                    target="_blank"
                    >License</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </Header>
</template>
<script>
export default {
  data() {
    return {
      qnas: [
        {
          article_no: 1,
          user_id: "ssafy",
          question: "아파트 정보를 수정해 주세요.",
          answer:
            "대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 ",
          hit: 0,
          register_time: "2022-09-27 12:28:47",
        },
        {
          article_no: 2,
          user_id: "ssafy",
          question: "질문2222222222222",
          answer:
            "대답2222222222222222 대답2222222222222222 대답2222222222222222 대답2222222222222222 대답2222222222222222 대답2222222222222222 대답2222222222222222 대답2222222222222222 대답2222222222222222 대답2222222222222222 ",
          hit: 0,
          register_time: "2022-09-28 08:42:37",
        },
      ],
    };
  },
};
</script>
<style>
button {
}
h2.accordion-header > button {
  padding-left: 12px !important;
  border-bottom: 1px solid rgba(210, 210, 210, 1) !important;
  font: ;
}
h2.accordion-header > button:hover {
  background: rgba(128, 128, 128, 0.335);
}
div.accordion-body {
  border-bottom: 1px solid rgba(210, 210, 210, 1) !important;
}
</style>
