<script setup>
import { onMounted } from "vue";

// example components
import NavbarCommon from "@/components/common/navbar/NavbarCommon.vue";
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";

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
            <div class="card z-index-0 fadeIn3 fadeInBottom min-vh-75">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">공 지 사 항</h4>
                </div>
                <div class="pt-6 px-7">
                  <table class="table">
                    <thead>
                      <tr class="row">
                        <th class="col sbjt">
                          <h5>{{ notice.subject }}</h5>
                        </th>
                        <span class="col-auto text-right align-self-end"
                          ><small>{{ notice.regTime }}</small></span
                        >
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="content">
                        <td class="pt-5">{{ notice.content }}</td>
                      </tr>
                      <tr>
                        <td class="text-center row justify-content-center">
                          <div class="col-auto" v-on:click="getNoticeList">
                            <MaterialButton
                              variant="gradient"
                              color="success"
                              type="submit"
                              class="mb-0"
                              >목록으로</MaterialButton
                            >
                          </div>
                          <div class="col-auto" v-on:click="deleteNotice">
                            <MaterialButton
                              variant="gradient"
                              color="danger"
                              type="button"
                              class="mb-0"
                              >삭제하기</MaterialButton
                            >
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
      notice: {},
    };
  },
  props: ["getno"],
  created() {
    console.log(this.getno);
    this.getNoticeDetail();
  },
  watch: {
    getno() {
      this.getNoticeDetail();
    },
  },

  methods: {
    getNoticeDetail() {
      console.log(this.$route.query);
      this.$axios
        .get("http://localhost:8080/api/notices/" + this.getno)
        .then(({ data }) => {
          this.notice = data;
        })
        .catch((err) => {
          if (err.message.indexOf("Network Error") > -1) {
            alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.");
          }
        });
    },
    getNoticeList() {
      delete this.getno;
      this.$router.push({
        path: "/notice",
      });
    },
    deleteNotice() {
      if (!confirm("삭제하시겠습니까?")) return;

      this.$axios
        .delete("http://localhost:8080/api/notices/" + this.getno)
        .then(() => {
          alert("삭제되었습니다.");
          this.getNoticeList();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.sbjt {
  padding-left: 1%;
}
.content {
  height: 350px !important;
}
</style>
