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
      <div class="card box-shadow-xl overflow-hidden mb-5 px-4 pt-3">
        <div class="row">
          <div class="col list overflow-auto">
            <div v-if="favApts || favApts.length">
              <table class="table table-hover text-center">
                <colgroup>
                  <col style="width: 5%" />
                  <col style="width: 10%" />
                  <col style="width: 63%" />
                  <col style="width: 20%" />
                  <col style="width: 2%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>아파트명</th>
                    <th>주소</th>
                    <th>최근 거래가</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody v-for="(favApt, index) in favApts" :key="index">
                  <tr>
                    <td>{{ index }}</td>
                    <td>{{ favApt.aptName }}</td>
                    <td>{{ favApt.fullJibunAddress }}</td>
                    <td>{{ $filters.price(recentPrice[0][index - 1]) }}원</td>
                    <td @click="deleteFavApt(favApt.aptCode)">
                      <a href=""><i class="material-icons">delete_forever</i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-center" v-else>관심 매물이 없습니다.</div>
          </div>
          <div class="col">
            <div class="graph"></div>
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
      favApts: [],
      recentPrice: [],
    };
  },
  methods: {
    getFavAptList() {
      this.$axios
        .get("http://localhost:8080/api/user/interest/apts", {
          params: { pgno: 1, userId: "ssafy" },
        })
        .then((res) => {
          console.log(res);
          this.favApts = res.data.aptInfos;
          this.recentPrice.push(res.data.recentPrice);
        })
        .catch((err) => {
          if (err.message.indexOf("Network Error") > -1) {
            alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.");
          }
        });
    },

    deleteFavApt(getno) {
      console.log(getno);
      if (!confirm("삭제하시겠습니까?")) return;

      this.$axios
        .delete("http://localhost:8080/api/user/interest/apts/" + getno, {
          params: { userId: "ssafy" },
        })
        .then(() => {
          alert("삭제되었습니다.");
          this.getFavAptList();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getFavAptList();
  },
};
</script>

<style scoped>
.graph {
  height: 100%;
  background: #000;
}
.list {
  height: 500px;
}
.table td {
  font-size: 0.83rem;
  word-wrap: break-word;
  white-space: normal !important;
  height: auto;
  vertical-align: middle;
}
</style>
