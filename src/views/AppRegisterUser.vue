<template>
  <Header>
    <NavbarCommon light />
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage: 'url(https://images.pexels.com/photos/333645/pexels-photo-333645.jpeg)',
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-info shadow-success border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">회원가입</h4>
                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start" @submit.prevent>
                  <div
                    class="input-group input-group-outline my-3"
                    style="margin-bottom: 5px !important"
                  >
                    <label class="form-label">아이디</label>
                    <input
                      id="id"
                      type="text"
                      class="form-control form-control-md"
                      placeholder
                      isrequired="false"
                      v-model="user.id"
                      @keyup="isIdValid"
                    />
                  </div>
                  <div class="id-check">
                    <span v-if="isUsed === 1">아이디는 5자 이상이어야 합니다.</span>
                    <span v-if="isUsed === 2">사용할 수 없는 아이디입니다.</span>
                    <span v-if="isUsed === 3">사용할 수 있는 아이디입니다.</span>
                  </div>

                  <div
                    class="input-group input-group-outline my-3"
                    style="margin-bottom: 5px !important"
                  >
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
                      @keyup="isEmailValid"
                    />
                  </div>

                  <div class="input-group input-group-outline my-3">
                    <Multiselect
                      v-model="value"
                      :options="options"
                      mode="tags"
                      placeholder="관심사 선택(최대 3개)"
                      :close-on-select="false"
                      :searchable="false"
                      :object="true"
                      :delay="0"
                      :min-chars="1"
                      :max="3"
                      class="multiselect-blue"
                    />
                  </div>

                  <div class="text-center">
                    <button
                      @click="register"
                      class="btn bg-gradient-info btn-md w-100 false my-4 mb-2"
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
    </div>
  </Header>
</template>

<script>
// example components
import NavbarCommon from "@/components/common/navbar/NavbarCommon.vue";
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";

// imported components
import PasswordMeter from "vue-simple-password-meter";
import Multiselect from "@vueform/multiselect";
import restApi from "@/util/http-common.js";
import { registerUser } from "@/api/modules/user";
import { mapState, mapActions } from "vuex";

const userStore = "userStore";

export default {
  components: { Header, NavbarCommon, MaterialButton, PasswordMeter, Multiselect },

  data() {
    return {
      // user info
      user: {
        id: "",
        pw: "",
        name: "",
        email: "",
      },

      // id check
      isUsed: 0,

      // pw check
      score: null,
      msg: "",

      // email check
      // https://codepen.io/CSWApps/pen/MmpBjV
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      isValid: false,

      // interest type
      options: [
        { value: "1", label: "교육" },
        { value: "2", label: "환경" },
        { value: "3", label: "안전" },
        { value: "4", label: "교통" },
        { value: "5", label: "생활" },
      ],
      value: [],
    };
  },

  computed: {
    ...mapState(userStore, ["userInfo"]),
  },

  methods: {
    ...mapActions(userStore, ["userConfirm", "getUserInfo"]),

    setMaterialInput,
    registerUser,

    onScore(payload) {
      this.score = payload.score;
      if (this.score < 3) {
        document.querySelector("#pw").parentElement.classList.remove("is-valid");
        document.querySelector("#pw").parentElement.classList.add("is-invalid");
      } else {
        document.querySelector("#pw").parentElement.classList.remove("is-invalid");
        document.querySelector("#pw").parentElement.classList.add("is-valid");
      }
    },

    isEmailValid() {
      this.isValid = this.user.email == "" ? "" : this.reg.test(this.user.email) ? true : false;
      if (!this.isValid) {
        document.querySelector("#email").parentElement.classList.remove("is-valid");
        document.querySelector("#email").parentElement.classList.add("is-invalid");
      } else {
        document.querySelector("#email").parentElement.classList.remove("is-invalid");
        document.querySelector("#email").parentElement.classList.add("is-valid");
      }
    },

    isIdValid() {
      if (this.user.id.length === 0) {
        document.querySelector("#id").parentElement.classList.remove("is-valid");
        document.querySelector("#id").parentElement.classList.add("is-invalid");
        this.isUsed = 0;
      } else if (this.user.id.length < 5) {
        document.querySelector("#id").parentElement.classList.remove("is-valid");
        document.querySelector("#id").parentElement.classList.add("is-invalid");
        this.isUsed = 1;
      } else {
        restApi.get(`/api/user/info/${this.user.id}/check`).then(({ data }) => {
          if (data === "fail") {
            document.querySelector("#id").parentElement.classList.remove("is-invalid");
            document.querySelector("#id").parentElement.classList.add("is-valid");
            this.isUsed = 3;
          } else {
            document.querySelector("#id").parentElement.classList.remove("is-valid");
            document.querySelector("#id").parentElement.classList.add("is-invalid");
            this.isUsed = 2;
          }
        });
      }
    },

    async register() {
      let types = [];
      for (var i = 0; i < this.value.length; ++i) {
        types.push({ id: this.user.id, type: this.value[i].value });
      }

      await this.registerUser(
        {
          ...this.user,
          types: types,
        },

        ({ data }) => {
          if (data) {
            alert("가입을 환영합니다!");
            this.$router.push("/login");
          } else {
            alert("등록하는데 문제가 발생했습니다. 다시 시도해주세요!");
          }
        }
      );
    },
  },

  mounted() {
    this.setMaterialInput();
  },
};
</script>

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
.password-check,
.id-check {
  font-size: 10px;
  margin-top: 0px;
  padding-left: 1px;
}

.multiselect-blue {
  --ms-tag-bg: #dbeafe;
  --ms-tag-color: #2563eb;
  --ms-option-font-size: 0.875rem;
  --ms-font-size: 0.875rem;
}
</style>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
body {
  overflow: hidden;
}
</style>
