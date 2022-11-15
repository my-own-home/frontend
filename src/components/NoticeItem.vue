<script setup>
import { onMounted } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <Header>
    <DefaultNavbar transparent />
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
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">공지사항</h4>
                </div>
              </div>
              <div class="card-body min-vh-70">
                <div style="text-align: right">
                  <button
                    type="button"
                    class="btn btn-outline-success btn-sm"
                    style="margin-right: 5%"
                  >
                    글작성
                  </button>
                </div>
                <div v-if="notices.length" class="d-flex justify-content-center">
                  <table class="table table-hover text-center w-90">
                    <colgroup>
                      <col style="width: 5%" />
                      <col style="width: 65%" />
                      <col style="width: 10%" />
                      <col style="width: 5%" />
                      <col style="width: 15%" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>조회수</th>
                        <th>작성일</th>
                      </tr>
                    </thead>
                    <tbody v-for="notice in notices" :key="notice.article_no">
                      <tr>
                        <td>{{ notice.article_no }}</td>
                        <td>
                          <router-link :to="`/board/view/${notice.article_no}`">
                            {{ notice.subject }}
                          </router-link>
                        </td>
                        <td>{{ notice.user_id }}</td>
                        <td>{{ notice.hit }}</td>
                        <td>{{ notice.register_time }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="text-center" v-else>공지사항이 없습니다.</div>
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
      notice: {
        article_no: 1,
        user_id: "admin",
        subject: "첫번째 공지사항입니다.",
        content: "안녕하세요. 첫번째 공지사항입니다.",
        hit: 0,
        register_time: "2022-09-27 12:28:47",
      },
    };
  },
};
</script>
<style></style>
