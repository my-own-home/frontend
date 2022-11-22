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
        <div class="row justify-content-lg-between">
          <!-- <div class="col-lg-12 col-md-8 col-12 mx-auto"> -->
          <div class="col-lg-12">
            <div class="card z-index-0 fadeIn3 fadeInBottom min-vh-75">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">공 지 사 항</h4>
                </div>
              </div>
              <form role="form" id="contact-form" method="post" autocomplete="off">
                <div class="card-body h-100 px-5 pb-0 pt-7 mx-7">
                  <div class="mb-4">
                    <div class="input-group-static mb-4">
                      <label for="message" class="labelClass">제목<slot /></label>
                      <textarea
                        name="message"
                        class="form-control"
                        id="message"
                        rows="1"
                        v-model.lazy="notice.subject"
                      ></textarea>
                    </div>
                  </div>

                  <div class="mb-4">
                    <div class="input-group-static mb-4">
                      <label for="message" class="labelClass">작성자<slot /></label>
                      <textarea
                        name="message"
                        class="form-control"
                        id="message"
                        rows="1"
                        v-model.lazy="notice.uid"
                      ></textarea>
                    </div>
                  </div>

                  <div class="input-group-static mb-4">
                    <label for="message" class="labelClass">내용<slot /></label>
                    <textarea
                      name="message"
                      class="form-control"
                      id="message"
                      rows="10"
                      v-model.lazy="notice.content"
                    ></textarea>
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-3" @click="noticeWrite">
                    <MaterialButton type="button" variant="gradient" color="dark" fullWidth
                      >등록하기</MaterialButton
                    >
                  </div>
                  <div class="col-md-3">
                    <MaterialButton type="reset" variant="gradient" color="dark" fullWidth
                      >취소하기</MaterialButton
                    >
                  </div>
                </div>
              </form>
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
export default {
  data() {
    return {
      notice: {},
    };
  },
  methods: {
    setMaterialInput,
    noticeWrite() {
      console.log(this.notice);
      this.$axios.post(`http://localhost:8080/api/notices`, this.notice).then(() => {
        this.clear();
        this.$router.push("/notice");
      });
    },
    clear() {
      this.notice = {};
    },
  },
  mounted() {
    this.setMaterialInput();
  },
  components: {
    NavbarCommon,
    Header,
    MaterialInput,
    MaterialSwitch,
    MaterialButton,
    MaterialTextArea,
    setMaterialInput,
  },
};
</script>
<style scoped>
textarea {
  border-bottom: 1px solid black;
  border-radius: 0;
  resize: none;
  margin-left: 5px;
}
</style>
