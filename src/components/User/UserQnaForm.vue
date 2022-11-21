<script setup>
import { onMounted } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
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
    <div class="container mt-3">
      <div class="row">
        <div class="col-lg-12">
          <div class="card z-index-0 fadeIn3 fadeInBottom min-vh-50">
            <form role="form" id="contact-form" method="post" autocomplete="off">
              <div class="card-body h-100 px-5 pb-0 pt-5">
                <div class="mb-4">
                  <MaterialInput
                    class="input-group-dynamic"
                    :label="{ text: '작성자', class: 'form-label' }"
                    type="text"
                  />
                </div>
                <MaterialTextArea class="input-group-static mb-4" id="message" :rows="10"
                  >내용
                </MaterialTextArea>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-3">
                  <MaterialButton type="submit" variant="gradient" color="dark" fullWidth
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
  </Header>
</template>

<style></style>
