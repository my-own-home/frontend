<script setup>
import { onMounted } from "vue";
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";

// image
import bgContact from "@/assets/img/examples/blog2.jpg";

// tooltip
import setTooltip from "@/assets/js/tooltip";

import setMaterialInput from "@/assets/js/material-input";
// store
import { useAppStore } from "@/stores";
const store = useAppStore();

onMounted(() => {
  setTooltip(store.bootstrap);
  setMaterialInput();
});
</script>
<template>
  <section class="py-lg-5">
    <div class="container" v-if="isHidden">
      <div class="row">
        <div class="card box-shadow-xl overflow-hidden mb-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <form id="contact-form" method="post">
                  <div class="card-body pt-1">
                    <div class="row justify-content-center"></div>
                    <div class="row justify-content-center mt-n3">
                      <div class="col-7 text-center">
                        개인정보를 보기 위해서는 인증이 필요합니다.
                      </div>
                      <div class="col-7 mt-3">
                        <MaterialInput
                          class="input-group-outline"
                          :label="{ text: '비밀번호', class: 'form-label' }"
                          type="password"
                          v-model="pw"
                        />
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-3 text-center mt-3" @click="check(pw)">
                        <MaterialButton
                          variant="gradient"
                          color="success"
                          type="button"
                          class="mb-0"
                          >확인하기</MaterialButton
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container modify" v-if="!isHidden">
      <div class="row">
        <div class="card box-shadow-xl overflow-hidden pt-2">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <form id="contact-form" method="post">
                  <div class="card-header px-4 py-sm-3">
                    <h2>회원정보</h2>
                  </div>
                  <div class="card-body pt-1">
                    <div class="row">
                      <form role="form" class="text-start">
                        <div class="container">
                          <div class="input-margin row align-items-center justify-content-start">
                            <div class="col-2">
                              <i class="material-icons">person</i>
                              <span class="h6 pl-0">&nbsp 이름&nbsp&nbsp</span>
                            </div>
                            <div class="col col-padding">
                              <div class="input-group">
                                <textarea
                                  name="message"
                                  class="form-control"
                                  id="name"
                                  rows="1"
                                  :value="user.name"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="container">
                          <div class="input-margin row align-items-center justify-content-start">
                            <div class="col-2">
                              <i class="material-icons">today</i>
                              <span class="h6 pl-0">&nbsp 가입일&nbsp&nbsp</span>
                            </div>
                            <div class="col col-padding">
                              <div class="input-group">
                                <textarea
                                  name="message"
                                  class="form-control"
                                  id="regTime"
                                  rows="1"
                                  :value="user.regTime"
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="container">
                          <div class="input-margin row align-items-center justify-content-start">
                            <div class="col-2">
                              <i class="material-icons">contact_emergency</i>
                              <span class="h6 pl-0">&nbsp 아이디&nbsp&nbsp</span>
                            </div>
                            <div class="col col-padding">
                              <div class="input-group">
                                <textarea
                                  name="message"
                                  class="form-control"
                                  id="id"
                                  rows="1"
                                  :value="user.id"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="container">
                          <div class="input-margin row align-items-center justify-content-start">
                            <div class="col-2">
                              <i class="material-icons">drafts</i>
                              <span class="h6 pl-0">&nbsp 이메일&nbsp&nbsp</span>
                            </div>
                            <div class="col col-padding">
                              <div class="input-group">
                                <textarea
                                  name="message"
                                  class="form-control"
                                  id="email"
                                  rows="1"
                                  :value="user.email"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="container">
                          <div class="input-margin row align-items-center justify-content-start">
                            <div class="col-2">
                              <i class="material-icons">key</i>
                              <span class="h6 pl-0">&nbsp 비밀번호&nbsp&nbsp</span>
                            </div>
                            <div class="col col-padding">
                              <div class="input-group">
                                <textarea
                                  name="message"
                                  class="form-control"
                                  id="pw"
                                  rows="1"
                                  :value="user.pw"
                                  placeholder="비밀번호를 입력하세요"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="row">
                      <div class="col-md-6 text-end ms-auto" @click="changeHidden">
                        <MaterialButton
                          variant="gradient"
                          color="success"
                          type="button"
                          class="mb-0"
                          >정보 수정하기</MaterialButton
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { useAppStore } from "@/stores";
const userStore = "userStore";
export default {
  data() {
    return {
      pw: "",
      user: {
        id: null,
        pw: null,
      },
      isHidden: true,
    };
  },
  methods: {
    ...mapActions(userStore, ["userConfirm", "getUserInfo"]),
    ...mapGetters(userStore, ["checkUserInfo", "checkToken"]),
    ...mapState(userStore, ["isLogin", "userInfo"]),

    async check(pw) {
      if (!pw) {
        alert("비밀번호를 입력하세요");
      } else {
        this.user.pw = pw;
        await this.userConfirm(this.user);
        let token = sessionStorage.getItem("access-token");
        if (this.userInfo) {
          await this.getUserInfo(token);
          this.isHidden = false;
        } else {
          console.log(this.user);
          alert("비밀번호가 일치하지 않습니다.");
          this.$router.push({ name: "user" });
        }
      }
    },
    changeHidden() {
      this.isHidden = true;
    },
  },
  mounted() {
    this.user = this.checkUserInfo();
  },
};
</script>
<style scoped>
.card {
  padding-top: 10%;
  padding-bottom: 10%;
}

.input-margin {
  margin-bottom: 15px;
}
.container {
  padding: 0;
}
.col-2 {
  padding-right: 0;
}
.col-padding {
  padding-left: 0;
}
textarea {
  font-size: 1rem;
  border-radius: 0;
  border-bottom: 1px solid rgb(187, 186, 186);
  resize: none;
}
textarea:focus {
  border-radius: 0;
  border-bottom: 2px solid black;
}
#regTime {
  padding-left: 1px;
}
</style>
