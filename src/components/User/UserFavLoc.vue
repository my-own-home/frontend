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
          <div class="d-flex justify-content-center">
            <div class="w-70 h4">관심 지역</div>
          </div>
          <div
            v-if="favLocs || favLocs.length"
            class="overflow-auto d-flex justify-content-center list"
          >
            <table class="table table-hover text-center w-70">
              <colgroup>
                <col style="width: 5%" />
                <col style="width: 65%" />
                <col style="width: 5%" />
              </colgroup>

              <tbody v-for="(favLoc, index) in favLocs" :key="favLoc.dongCode">
                <tr>
                  <td>{{ index + 1 }}</td>
                  <td>{{ favLoc.name }}</td>
                  <td>
                    <a href=""><i class="material-icons">delete_forever</i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-center" v-else>관심 지역이 없습니다.</div>
          <div class="d-flex justify-content-center">
            <div class="row mt-5 w-90 mb-3">
              <div class="col">
                <h4>최신 뉴스</h4>
                <div class="news"></div>
              </div>
              <div class="col">
                <h4>관심 지역 추이 비교</h4>
                <div class="graph"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      favLocs: [
        {
          dongCode: 12312,
          name: "서울시 ~구 ~동",
        },
        {
          dongCode: 12312,
          name: "서울시 ~구 ~동",
        },
        {
          dongCode: 12312,
          name: "서울시 ~구 ~동",
        },
        {
          dongCode: 12312,
          name: "서울시 ~구 ~동",
        },
      ],
    };
  },
};
</script>
<style scoped>
.list {
  height: 100px;
}
.news {
  height: 400px;
  background: #000;
}
.graph {
  height: 400px;
  background: #000;
}
</style>
