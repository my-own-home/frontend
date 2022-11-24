<script setup>
import Header from "@/examples/Header.vue";
import NavbarCommon from "@/components/common/navbar/NavbarCommon.vue";
</script>
<template>
  <div class="">
    <div class="row">
      <div class="col-lg-12">
        <table class="table table-hover text-center w-100 mt-3">
          <colgroup>
            <col style="width: 2%" />
            <col style="width: 98%" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(news, index) in newsList" :key="index" @click="openNews(news.link)">
              <td>{{ index + 1 }}</td>
              <td v-html="news.title"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["idx", "sido", "gugun", "dong"],
  name: "NewsList",
  data() {
    return {
      newsList: [],
    };
  },
  created() {
    this.getNewsList();
  },
  watch: {
    idx(val) {
      this.getNewsList();
    },
  },
  methods: {
    getNewsList() {
      //   var URL = "";
      //   URL = `/api/v1/search/news.json?query=서울시+강남구+대치동&display=5`;

      const keyword = this.sido + " " + this.gugun + " " + this.dong;
      const URL = `/api/v1/search/news.json?query=${keyword}&display=5`;

      //   const URL = `/api/v1/search/news.json?query=${this.favLocs[index].sido}+${this.favLocs[index].gugun}+${this.favLocs[index].dong}&display=5`;
      const clientId = import.meta.env.VITE_HOUSE_MATCH_NAVER_NEWS_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_HOUSE_MATCH_NAVER_NEWS_CLIENT_SECRET;

      this.$axios
        .get(URL, {
          headers: {
            Accept: "application/json",
            "X-Naver-Client-Id": clientId,
            "X-Naver-Client-Secret": clientSecret,
          },
        })
        .then((res) => {
          console.log(res);
          this.newsList = res.data.items; //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
        })
        .catch((err) => {
          console.log(err);

          if (err.message.indexOf("Network Error") > -1) {
            alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.");
          }
        });
    },
    openNews(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
<style scoped>
.table td {
  font-size: 0.8rem;
  word-wrap: break-word;
  white-space: normal !important;
  height: auto;
  vertical-align: middle;
}
.table td:hover {
  color: blue;
  font-weight: bold;
}
</style>
