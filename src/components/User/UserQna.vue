<script setup>
import { onMounted } from "vue";
import UserQnaList from "@/components/User/UserQnaList.vue";
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";

// image
import bgContact from "@/assets/img/examples/blog2.jpg";

// tooltip
import setTooltip from "@/assets/js/tooltip";
import { RouterView } from "vue-router";
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
        <!-- <div class="card box-shadow-xl overflow-hidden mb-5"> -->
        <div class="container w-70 mb-5">
          <!-- <div class="row justify-content-between">
            <h2 class="my-4 col">1:1 문의</h2>
            <div class="col-auto mt-5">

              <button class="btn btn-outline-success" type="button" @click="addQuestion()">
                질문하기
              </button>
            </div>
          </div> -->
          <!-- <UserQnaList /> -->
          <router-view />
        </div>
        <!-- </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      qnas: [],
      replies: [],
    };
  },
  methods: {
    getQnaList() {
      this.$axios
        .get("http://localhost:8080/api/qnas", {
          params: { pgno: 1 },
        })
        .then((res) => {
          console.log(res);
          this.qnas = res.data.questions;
          this.replies = res.data.replies;
        })
        .catch((err) => {
          if (err.message.indexOf("Network Error") > -1) {
            alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.");
          }
        });
    },

    addQuestion() {
      this.$router.push({
        path: "/user/qna-write",
      });
    },
  },
  mounted() {
    this.getQnaList();
  },
};
</script>
