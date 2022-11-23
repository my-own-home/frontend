<script setup>
import { onMounted } from "vue";

// example components
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
  <div v-if="qnas && qnas.length" class="border-top border-dark">
    <div class="accordion" id="basicAccordion" v-for="(qna, index) in qnas" :key="index">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed rounded-top mt-2"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#flush-collapse' + index"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Q. {{ qna.subject }}
            </button>
          </h2>
          <div
            :id="'flush-collapse' + index"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
            style="padding-left: 5%"
          >
            <div class="accordion-body h6" v-if="replies[qna.no]">
              A. {{ replies[qna.no].content }}
            </div>
            <div class="accordion-body" v-else>등록된 답변이 없습니다.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center" v-else>질문이 없습니다.</div>
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
