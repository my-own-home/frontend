<script setup>
import { onMounted } from "vue";
import UserFavLocNews from "@/components/User/UserFavLocNews.vue";
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
                <tr @click="getLocInfo(index)">
                  <td>{{ index }}</td>
                  <td>{{ favLoc.sido + " " + favLoc.gugun + " " + favLoc.dong }}</td>
                  <td @click="deleteFavLoc(favLoc.dongCode)">
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
                <h4>지역 뉴스</h4>
                <user-fav-loc-news :idx="idx" :sido="sido" :gugun="gugun" :dong="dong" />
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
  components: { UserFavLocNews },
  data() {
    return {
      favLocs: [],
      sido: "",
      gugun: "",
      dong: "",
      idx: 0,
    };
  },
  methods: {
    getFavLocList() {
      this.$axios
        .get("http://localhost:8080/api/user/interest/locations", {
          params: { pgno: 1, userId: "ssafy" },
        })
        .then((res) => {
          console.log(res);
          this.favLocs = res.data.dongInfos;
        })
        .catch((err) => {
          if (err.message.indexOf("Network Error") > -1) {
            alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.");
          }
        });
    },

    deleteFavLoc(getno) {
      console.log(getno);
      if (!confirm("삭제하시겠습니까?")) return;

      this.$axios
        .delete("http://localhost:8080/api/user/interest/locations/" + getno, {
          params: { userId: "ssafy" },
        })
        .then(() => {
          alert("삭제되었습니다.");
          this.getFavLocList();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getLocInfo(index) {
      this.idx = index;
      this.sido = this.favLocs[index].sido;
      this.gugun = this.favLocs[index].gugun;
      this.dong = this.favLocs[index].dong;
    },
  },
  mounted() {
    this.getFavLocList();
  },
};
</script>
<style scoped>
.list {
  height: 100px;
}
.news,
.graph {
  height: 400px;
  background: #000;
}
</style>
