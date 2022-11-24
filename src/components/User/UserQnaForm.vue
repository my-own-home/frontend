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
  <div class="container mt-3">
    <div class="row justify-content-between">
      <h2 class="my-4 col">1:1 문의 등록</h2>
      <div class="col-auto mt-5">
        <!-- <MaterialButton class="my-4 mb-2" variant="gradient" color="success"
                >질문하기</MaterialButton
              > -->

        <button class="btn btn-outline-success" type="button" @click="moveToList()">
          목록으로
        </button>
      </div>
    </div>
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
                  v-model="qna.uid"
                />
              </div>

              <MaterialTextArea
                class="input-group-static mb-4"
                id="message"
                :rows="10"
                v-model.lazy="qna.subject"
                >내용
              </MaterialTextArea>
            </div>
            <div class="row justify-content-md-center">
              <div class="col-md-3" @click="qnaWrite">
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
</template>

<script>
export default {
  data() {
    return {
      qna: {},
    };
  },
  methods: {
    qnaWrite() {
      console.log(this.qna);
      this.$axios.post(`http://localhost:8080/api/qnas`, this.qna).then(() => {
        this.clear();
        this.$router.push("/user");
      });
    },
    clear() {
      this.qna = {};
    },
    moveToList() {
      this.$router.push({
        path: "/user",
      });
    },
  },
};
</script>
