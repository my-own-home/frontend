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
          <div v-if="favApts || favApts.length" class="d-flex justify-content-center">
            <table class="table table-hover text-center w-90">
              <colgroup>
                <col style="width: 5%" />
                <col style="width: 65%" />
              </colgroup>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>아파트명</th>
                  <th>주소</th>
                  <th>최근 거래가격</th>
                  <th>건축년도</th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-for="(favApt, index) in favApts" :key="favApt.aptCode">
                <tr>
                  <td>{{ index + 1 }}</td>
                  <td>{{ favApt.name }}</td>
                  <td>{{ favApt.address }}</td>
                  <td>{{ favApt.recentPrice }}만원</td>
                  <td>{{ favApt.builtYear }}</td>
                  <td>
                    <i class="material-icons">delete_forever</i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-center" v-else>관심 매물이 없습니다.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      favApts: [
        {
          aptCode: 1,
          name: "~~아파트",
          address: "서울시 ~구 ~동",
          recentPrice: 1321,
          builtYear: "1997-11-17",
        },
        {
          aptCode: 2,
          name: "~~아파트",
          address: "서울시 ~구 ~동",
          recentPrice: 1321,
          builtYear: "1997-11-17",
        },
      ],
    };
  },
};
</script>
