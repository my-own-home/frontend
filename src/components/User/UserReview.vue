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
          <div v-if="reviews || reviews.length" class="d-flex justify-content-center">
            <table class="table table-hover text-center w-90">
              <colgroup>
                <col style="width: 2%" />
                <col style="width: 16%" />
                <col style="width: 33%" />
                <col style="width: 3%" />
                <col style="width: 3%" />
                <col style="width: 3%" />
                <col style="width: 3%" />
                <col style="width: 3%" />
                <col style="width: 20%" />
                <col style="width: 6%" />
              </colgroup>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>아파트명</th>
                  <th>내 리뷰</th>
                  <th>별점</th>
                  <th>교통</th>
                  <th>자연</th>
                  <th>교육</th>
                  <th>생활</th>
                  <th>등록일</th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-for="(review, index) in reviews" :key="review.dongCode">
                <tr>
                  <td>{{ index + 1 }}</td>
                  <td>{{ aptNames[index] }}</td>
                  <td>{{ review.content }}</td>
                  <td>{{ review.score }}</td>
                  <td>{{ review.scoreTransport }}</td>
                  <td>{{ review.scoreNature }}</td>
                  <td>{{ review.scoreEdu }}</td>
                  <td>{{ review.scoreLife }}</td>
                  <td>{{ review.regTime }}</td>
                  <td>
                    <a href=""><i class="material-icons">edit</i></a>
                    <a href="" @click="deleteReview(review.no, review)"
                      ><i class="material-icons">delete_forever</i></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-center" v-else>작성한 리뷰가 없습니다.</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      reviews: [],
      aptNames: [],
    };
  },
  methods: {
    getReviewList() {
      this.$axios
        .get("http://localhost:8080/api/apts/reviews/user", {
          params: { pgno: 1, uid: "ssafy" },
        })
        .then((res) => {
          console.log(res);
          this.reviews = res.data.reviews;
          this.aptNames = res.data.aptNames;
        })
        .catch((err) => {
          if (err.message.indexOf("Network Error") > -1) {
            alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.");
          }
        });
    },

    deleteReview(getno, review) {
      console.log(getno);
      if (!confirm("삭제하시겠습니까?")) return;

      this.$axios
        .delete("http://localhost:8080/api/apts/reviews/" + getno, {
          params: { request: review },
        })
        .then(() => {
          alert("삭제되었습니다.");
          this.getReviewList();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getReviewList();
  },
};
</script>
<style scoped>
table {
}
.table td {
  word-wrap: break-word;
  white-space: normal !important;
  height: auto;
  vertical-align: middle;
}
</style>
