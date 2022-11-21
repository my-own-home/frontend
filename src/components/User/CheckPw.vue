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
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-3 text-center mt-3">
                        <MaterialButton
                          variant="gradient"
                          color="success"
                          type="submit"
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
  </section>
</template>
<style scoped>
.card {
  padding-top: 10%;
  padding-bottom: 10%;
}
</style>
