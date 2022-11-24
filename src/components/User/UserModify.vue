<script>
import { onMounted } from "vue";
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import { mapState, mapGetters, mapActions } from "vuex";
// image
import bgContact from "@/assets/img/examples/blog2.jpg";

// tooltip

import setMaterialInput from "@/assets/js/material-input";
// store
import { useAppStore } from "@/stores";
const userStore = "userStore";

export default {
  data() {
    return {
      user: {},
    };
  },
  components: { MaterialInput, MaterialButton, MaterialTextArea, bgContact },

  methods: {
    setMaterialInput,
    ...mapGetters(userStore, ["checkUserInfo", "checkToken"]),
    ...mapState(userStore, ["isLogin", "userInfo"]),
  },
  mounted() {
    this.setMaterialInput();
    this.user = this.checkUserInfo();
  },
};
</script>
<template>
  <section class="py-lg-5">
    <div class="container">
      <div class="row">
        <div class="card box-shadow-xl overflow-hidden mb-5">
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
                      <div class="col-md-6 text-end ms-auto">
                        <MaterialButton
                          variant="gradient"
                          color="success"
                          type="submit"
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

<style scoped>
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
