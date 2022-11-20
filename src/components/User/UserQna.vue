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
        <!-- <div class="card box-shadow-xl overflow-hidden mb-5"> -->
        <div class="container w-70 mb-5">
          <h2 class="my-4">1:1 문의</h2>
          <div v-if="qnas.length" class="border-top border-dark">
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
                      {{ qna.question }}
                    </button>
                  </h2>
                  <div
                    :id="'flush-collapse' + index"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                    style="padding-left: 5%"
                  >
                    <div class="accordion-body">
                      {{ qna.answer }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center" v-else>질문이 없습니다.</div>
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
