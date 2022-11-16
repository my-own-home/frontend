<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 components
import MaterialAvatar from "@/components/MaterialAvatar.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// image
import profilePic from "@/assets/img/bruce-mars.jpg";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <section class="py-sm-6 py-5 position-relative">
    <div class="container">
      <div class="row">
        <div class="col-12 mx-auto">
          <div class="mt-n8 mt-md-n9 text-center">
            <div class="blur-shadow-avatar">
              <MaterialAvatar
                size="xxl"
                class="shadow-xl position-relative z-index-2"
                :image="profilePic"
                alt="Avatar"
              />
            </div>
          </div>
          <div class="row pt-5">
            <div class="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h3 class="mb-0">{{ user.name }}</h3>
              </div>
              <div id="profileDetail">
                <div class="row mb-1">
                  <div class="col-auto">
                    <i class="material-icons">email</i>
                    <span class="h6 me-1">&nbsp 이메일 : </span>
                    <span>{{ user.email }}</span>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-auto">
                    <i class="material-icons">today</i>
                    <span class="h6 me-1">&nbsp 가입일 : </span>
                    <span>{{ user.regTime }}</span>
                  </div>
                </div>
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
        name: "김싸피",
        email: "ssafy@google.com",
        regTime: "2022-11-16",
      },
    };
  },
};
</script>
<style>
#profileDetail {
  margin-left: 15px;
}
</style>
