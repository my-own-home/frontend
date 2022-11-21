<script setup>
import { onMounted } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";
//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import QnaList from "@/components/QnaList.vue";
import QnaForm from "@/components/QnaForm.vue";
import QnaDetail from "@/components/QnaDetail.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <QnaDetail />
</template>
<script>
export default {
  data() {
    return {
      qnas: [
        {
          article_no: 1,
          user_id: "ssafy",
          question: "아파트 정보를 수정해 주세요.",
          answer:
            "대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 대답 ",
          hit: 0,
          register_time: "2022-09-27 12:28:47",
        },
        {
          article_no: 2,
          user_id: "ssafy",
          question: "질문2222222222222",
          answer:
            "대답2222222222222222 대답2222222222222222 대답2222222222222222 대답2222222222222222 대답2222222222222222 대답2222222222222222 대답2222222222222222 대답2222222222222222 대답2222222222222222 대답2222222222222222 ",
          hit: 0,
          register_time: "2022-09-28 08:42:37",
        },
      ],
    };
  },
};
</script>
<style>
h2.accordion-header > button {
  padding-left: 12px !important;
  padding-right: 12px !important;
  border-bottom: 1px solid rgba(210, 210, 210, 1) !important;
}
h2.accordion-header > button:hover {
  background: rgba(128, 128, 128, 0.335);
}
div.accordion-body {
  border-bottom: 1px solid rgba(210, 210, 210, 1) !important;
}
.accordion-button:after {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23344767'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !important;
}
</style>
