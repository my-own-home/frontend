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
                <col style="width: 5%" />
                <col style="width: 20%" />
                <col style="width: 30%" />
                <col style="width: 5%" />
                <col style="width: 5%" />
                <col style="width: 5%" />
                <col style="width: 5%" />
                <col style="width: 5%" />
                <col style="width: 20%" />
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
                  <td>{{ review.apt_name }}</td>
                  <td>{{ review.content }}</td>
                  <td>{{ review.score_stars }}</td>
                  <td>{{ review.score_transport }}</td>
                  <td>{{ review.score_nature }}</td>
                  <td>{{ review.score_edu }}</td>
                  <td>{{ review.score_life }}</td>
                  <td>{{ review.register_time }}</td>
                  <td>
                    <a href=""><i class="material-icons">edit</i></a>
                    <a href=""><i class="material-icons">delete_forever</i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-center" v-else>관심 지역이 없습니다.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          review_no: "1",
          content: "good",
          score_stars: "5",
          score_transport: "5",
          score_nature: "5",
          score_edu: "5",
          score_life: "5",
          register_time: "2022-11-18 00:00:00",
          update_time: "2022-11-18 00:00:00",
          apt_name: "광화문스페이스본(101동~105동)",
        },
        {
          review_no: "2",
          content: "good",
          score_stars: "5",
          score_transport: "5",
          score_nature: "5",
          score_edu: "5",
          score_life: "5",
          register_time: "2022-11-18 00:00:00",
          update_time: "2022-11-18 00:00:00",
          apt_name: "광화문스페이스본(101동~105동)",
        },
      ],
    };
  },
};
</script>
