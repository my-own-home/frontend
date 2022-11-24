<script>
// example components
import NavbarCommon from "@/components/common/navbar/NavbarCommon.vue";
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
import PasswordMeter from "vue-simple-password-meter";

export default {
  components: { Header, NavbarCommon, MaterialButton, PasswordMeter },

  data() {
    return {
      user: {
        id: "",
        pw: "",
        name: "",
        email: "",
      },
      score: null,
      msg: "",
    };
  },
  methods: {
    setMaterialInput,

    onScore(payload) {
      this.score = payload.score;
    },
  },

  mounted() {
    this.setMaterialInput();
  },
};
</script>
<template>
  <Header>
    <NavbarCommon light />
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)',
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">회원가입</h4>
                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start">
                  <div class="input-group input-group-outline my-3">
                    <label class="form-label">아이디</label>
                    <input
                      id="id"
                      type="text"
                      class="form-control form-control-md"
                      placeholder
                      isrequired="false"
                      v-model="user.id"
                    />
                  </div>

                  <div class="input-group input-group-outline my-3">
                    <label class="form-label">비밀번호</label>
                    <input
                      id="pw"
                      type="password"
                      class="form-control form-control-md"
                      placeholder
                      isrequired="false"
                      v-model="user.pw"
                    />
                  </div>
                  <div class="password-check">
                    <span v-if="score === 0">사용할 수 없는 비밀번호입니다.</span>
                    <span v-if="score === 1">안전하지 않은 비밀번호입니다.</span>
                    <span v-if="score === 2">안전하지 않은 비밀번호입니다.</span>
                    <span v-if="score === 3">안전한 비밀번호입니다.</span>
                    <span v-if="score === 4">완벽해요!</span>

                    <password-meter @score="onScore" :password="user.pw" />
                  </div>

                  <div class="input-group input-group-outline my-3">
                    <label class="form-label">이름</label>
                    <input
                      id="name"
                      type="text"
                      class="form-control form-control-md"
                      placeholder
                      isrequired="false"
                      v-model="user.name"
                    />
                  </div>

                  <div class="input-group input-group-outline my-3">
                    <label class="form-label">이메일</label>
                    <input
                      id="email"
                      type="email"
                      class="form-control form-control-md"
                      placeholder
                      isrequired="false"
                      v-model="user.email"
                    />
                  </div>

                  <div class="text-center">
                    <button
                      @click="confirm"
                      class="btn bg-gradient-success btn-md w-100 false my-4 mb-2"
                    >
                      가입하기
                    </button>
                  </div>
                </form>
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

<style>
.po-password-strength-bar {
  border-radius: 2px;
  transition: all 0.2s linear;
  height: 3px;
  margin-top: 8px;
}

.po-password-strength-bar.risky {
  background-color: #f95e68;
  width: 10%;
}

.po-password-strength-bar.guessable {
  background-color: #fb964d;
  width: 32.5%;
}

.po-password-strength-bar.weak {
  background-color: #fdd244;
  width: 55%;
}

.po-password-strength-bar.safe {
  background-color: #b0dc53;
  width: 77.5%;
}

.po-password-strength-bar.secure {
  background-color: #35cc62;
  width: 100%;
}
.password-check {
  font-size: 10px;
  margin-top: 0px;
}
</style>
