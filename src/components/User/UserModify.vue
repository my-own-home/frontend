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
                              <span class="h6 pl-0">&nbsp 이름</span>
                            </div>
                            <div class="col col-padding">
                              <MaterialInput
                                class="input-group-static"
                                type="text"
                                placeholder="eg. Thomas Shelby"
                                :value="user.name"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="container">
                          <div class="input-margin row align-items-center justify-content-start">
                            <div class="col-2">
                              <i class="material-icons">today</i>
                              <span class="h6 pl-0">&nbsp 가입일</span>
                            </div>
                            <div class="col col-padding">
                              <MaterialInput
                                class="input-group-static"
                                type="text"
                                placeholder="eg. Thomas Shelby"
                                :value="user.regTime"
                                isDisabled
                              />
                            </div>
                          </div>
                        </div>
                        <div class="container">
                          <div class="input-margin row align-items-center justify-content-start">
                            <div class="col-2">
                              <i class="material-icons">contact_emergency</i>
                              <span class="h6 pl-0">&nbsp 아이디</span>
                            </div>
                            <div class="col col-padding">
                              <MaterialInput
                                class="input-group-static"
                                type="text"
                                placeholder="eg. Thomas Shelby"
                                :value="user.userid"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="container">
                          <div class="input-margin row align-items-center justify-content-start">
                            <div class="col-2">
                              <i class="material-icons">drafts</i>
                              <span class="h6 pl-0">&nbsp 이메일</span>
                            </div>
                            <div class="col col-padding">
                              <MaterialInput
                                class="input-group-static"
                                type="email"
                                placeholder="eg. Thomas Shelby"
                                :value="user.email"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="container">
                          <div class="input-margin row align-items-center justify-content-start">
                            <div class="col-2">
                              <i class="material-icons">key</i>
                              <span class="h6 pl-0">&nbsp 비밀번호</span>
                            </div>
                            <div class="col col-padding">
                              <MaterialInput
                                class="input-group-static"
                                type="text"
                                :value="user.password"
                              ></MaterialInput>
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
<script>
export default {
  data() {
    return {
      user: {
        userid: "ssafy",
        password: "1234",
        name: "김싸피",
        email: "ssafy@google.com",
        regTime: "2022-11-16",
      },
    };
  },
};
</script>
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
</style>
