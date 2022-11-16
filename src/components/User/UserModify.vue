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
            <div class="row">
              <div class="col"></div>
              <div class="col-lg-7">
                <form id="contact-form" method="post">
                  <div class="card-header px-4 py-sm-3">
                    <h2>회원정보</h2>
                  </div>
                  <div class="card-body pt-1">
                    <div class="row">
                      <form role="form" class="text-start">
                        <MaterialInput
                          id="id"
                          class="input-group-outline mb-4 mt-3"
                          :label="{ text: '아이디', class: 'form-label' }"
                          type="text"
                        />
                        <MaterialInput
                          id="password"
                          class="input-group-outline mb-4"
                          :label="{ text: '비밀번호', class: 'form-label' }"
                          type="password"
                        />
                        <MaterialInput
                          id="name"
                          class="input-group-outline mb-4"
                          :label="{ text: '이름', class: 'form-label' }"
                          type="text"
                        />
                        <MaterialInput
                          id="email"
                          class="input-group-outline mb-4"
                          :label="{ text: '이메일', class: 'form-label' }"
                          type="email"
                        />
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
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
