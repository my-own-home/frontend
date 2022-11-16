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
          <div v-if="favLocs || favLocs.length" class="d-flex justify-content-center">
            <table class="table table-hover text-center w-90">
              <colgroup>
                <col style="width: 5%" />
                <col style="width: 65%" />
              </colgroup>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>관심지역</th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-for="(favLoc, index) in favLocs" :key="favLoc.dongCode">
                <tr>
                  <td>{{ index + 1 }}</td>
                  <td>{{ favLoc.name }}</td>
                  <td>
                    <i class="material-icons">delete_forever</i>
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
      favLocs: [
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
