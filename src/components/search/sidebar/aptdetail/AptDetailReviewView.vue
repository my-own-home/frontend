<template>
  <div>
    <div class="detail-basics" height="350px" style="position: relative">
      <RadarChart :chart-data="chartData" :chart-options="chartOptions" />
    </div>

    <div class="record-card">
      <h6><i class="material-icons">forum</i> 아파트 이야기</h6>
      <ul class="basic-detail-review">
        <div>
          <li>
            <strong>교육</strong>&nbsp;
            <StarRating
              :star-size="13"
              v-model:rating="userRating.scoreEdu"
              :inline="isInline"
              active-color="#5e89fb"
              :show-rating="false"
              :read-only="!userInfo"
            ></StarRating>
          </li>
          <li>
            <strong>환경</strong>&nbsp;
            <StarRating
              :star-size="13"
              v-model:rating="userRating.scoreNature"
              :inline="isInline"
              active-color="#5e89fb"
              :show-rating="false"
              :read-only="!userInfo"
            ></StarRating>
          </li>
          <li>
            <strong>안전</strong>&nbsp;
            <StarRating
              :star-size="13"
              v-model:rating="userRating.scoreSafety"
              :inline="isInline"
              active-color="#5e89fb"
              :show-rating="false"
              :read-only="!userInfo"
            ></StarRating>
          </li>
        </div>
        <li>
          <strong>교통</strong>&nbsp;
          <StarRating
            :star-size="13"
            v-model:rating="userRating.scoreTransport"
            :inline="isInline"
            active-color="#5e89fb"
            :show-rating="false"
            :read-only="!userInfo"
          ></StarRating>
        </li>
        <li>
          <strong>생활</strong>&nbsp;
          <StarRating
            :star-size="13"
            v-model:rating="userRating.scoreLife"
            :inline="isInline"
            active-color="#5e89fb"
            :show-rating="false"
            :read-only="!userInfo"
          ></StarRating>
        </li>
      </ul>

      <div class="write-review">
        <textarea
          id="story"
          name="story"
          rows="3"
          style="width: 100%"
          :disabled="!userInfo"
          v-model="userReview"
        >
        </textarea>
      </div>

      <div class="write-review write-btn">
        <button @click="confirm" class="btn btn-md w-100 false btn-review-write">
          내 이야기 공유하기
        </button>
      </div>
    </div>

    <div class="record-card">
      <div class="review" v-for="(review, index) in reviewList" :key="index">
        <table class="review-user">
          <tr>
            <MaterialAvatar
              image="/src/assets/img/profiles/blank-profile.png"
              alt="Avatar"
              size="xs"
            />
            <span class="user-id">&nbsp;&nbsp;{{ review.uid }} &nbsp;</span>
          </tr>
        </table>

        <ul class="basic-detail-body">
          <div>
            <li>
              <strong>교육</strong>&nbsp;
              <StarRating
                :star-size="13"
                v-model:rating="review.scoreLife"
                :inline="isInline"
                active-color="#5e89fb"
                :show-rating="false"
                :read-only="true"
              ></StarRating>
            </li>
            <li>
              <strong>환경</strong>&nbsp;
              <StarRating
                :star-size="13"
                v-model:rating="review.scoreNature"
                :inline="isInline"
                active-color="#5e89fb"
                :show-rating="false"
                :read-only="true"
              ></StarRating>
            </li>
            <li>
              <strong>안전</strong>&nbsp;
              <StarRating
                :star-size="13"
                v-model:rating="review.scoreSafety"
                :inline="isInline"
                active-color="#5e89fb"
                :show-rating="false"
                :read-only="true"
              ></StarRating>
            </li>
          </div>
          <li>
            <strong>교통</strong>&nbsp;
            <StarRating
              :star-size="13"
              v-model:rating="review.scoreTransport"
              :inline="isInline"
              active-color="#5e89fb"
              :show-rating="false"
              :read-only="true"
            ></StarRating>
          </li>
          <li>
            <strong>생활</strong>&nbsp;
            <StarRating
              :star-size="13"
              v-model:rating="review.scoreLife"
              :inline="isInline"
              active-color="#5e89fb"
              :show-rating="false"
              :read-only="true"
            ></StarRating>
          </li>
        </ul>

        <div class="review-content">
          <i class="material-icons">reviews</i>
          {{ review.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

import { getAvgAptReview, getAptReviewList, addAptReview } from "@/api/modules/location";
import MaterialAvatar from "@/components/MaterialAvatar.vue";
import RadarChart from "@/components/common/chartjs/RadarChart.vue";
// @ts-ignore
import StarRating from "vue-star-rating";

const userStore = "userStore";

export default {
  components: { RadarChart, StarRating, MaterialAvatar },

  props: ["aptCode", "aptName"],

  computed: {
    ...mapState(userStore, ["userInfo"]),
  },

  data() {
    return {
      // ...mapState(userStore, ["isLogin"]),

      loginCheck: false,
      userReview: "",

      reviewList: [],
      isInline: true,
      avgStars: null,
      navigator: null,

      // rating
      userRating: {
        scoreSafety: 0,
        scoreEdu: 0,
        scoreTransport: 0,
        scoreNature: 0,
        scoreLife: 0,
      },

      starSize: "20",
      step: 1.0,

      // chartjs
      chartData: {
        labels: ["안전", "교육", "환경", "교통", "생활"],
        datasets: [],
      },

      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            // display: false,
          },
          tooltip: {
            // enabled: false,
          },
        },
        scale: {
          r: {
            max: 5,
            min: 0,
            ticks: {
              stepSize: 1,
            },
          },
        },
      },
    };
  },

  watch: {
    reviewList() {},
  },

  created() {
    console.log("created AptDetail");
    this.updateAptReviewList(this.aptCode);
    this.getAvgAptReview(
      this.aptCode,
      ({ data }) => {
        console.log(data);
        let avgs = [data["안전"], data["교통"], data["환경"], data["교육"], data["생활"]];
        console.log(avgs);

        this.chartData.datasets.push({
          label: "현재 아파트 리뷰 평균",
          data: avgs,
          borderColor: "#5e89fb",
          backgroundColor: "rgba(94, 137, 251, 0.2)",
          borderWidth: 1.5,
        });

        this.chartData.datasets.push({
          label: "주변 지역 리뷰 평균",
          data: [3.5, 4, 3.67, 4.43, 4.2],
          borderColor: "#fdc434",
          backgroundColor: "rgba(253, 196, 52, 0.2)",
          borderWidth: 1.5,
        });

        this.avgStars = data.score;
        console.log(this.chartData);
      },
      (error) => {
        console.log(error);
      }
    );
  },

  mounted() {},

  methods: {
    getAvgAptReview,
    getAptReviewList,
    addAptReview,

    updateAptReviewList() {
      this.getAptReviewList(
        this.aptCode,
        ({ data }) => {
          console.log("udateaptreview");
          this.reviewList = data.reviews;
        },
        (error) => {
          console.log(error);
        }
      );
    },

    clearInputValues() {
      this.userRating.scoreSafety = 0;
      this.userRating.scoreEdu = 0;
      this.userRating.scoreTransport = 0;
      this.userRating.scoreNature = 0;
      this.userRating.scoreLife = 0;
      this.userReview = "";
    },

    confirm() {
      if (!this.userInfo) {
        alert("로그인 해주세요!");
      } else {
        this.addAptReview(
          {
            aptCode: this.aptCode,
            uid: this.userInfo.id,
            scoreStars: 0,
            ...this.userRating,
            content: this.userReview,
          },
          ({ data }) => {
            if (data === "success") {
              this.updateAptReviewList();
              this.clearInputValues();
              alert("리뷰가 등록되었습니다!");
            } else {
              alert("등록하는데 문제가 발생했습니다. 다시 시도해주세요!");
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    },
  },
};
</script>

<style scoped>
.detail-basics {
  margin-top: 2px;
  height: auto;
  width: 100% !important;

  padding: 15px 15px;

  background-color: #fff;
  font-size: 13px;
}

.record-card {
  margin-top: 2px;
  height: auto;
  width: 100% !important;

  padding: 18px 15px;

  background-color: #fff;
  font-size: 13px;
}

.write-review {
  padding: 5px;
  padding-bottom: 0px;
  margin-bottom: 0px;
}

.write-btn {
  padding: 0 5px !important;
}
button,
button:link,
button:visited {
  background-color: #628cffb4 !important;
  margin-top: 0px;
  height: 35px;
  padding: 0 0;
  color: #151d2b;
}

button:hover,
button:active {
  background-color: rgba(71, 118, 248, 0.836) !important;
  color: #151d2b;
}

textarea {
  padding: 10px;
  border-radius: 10px;
  height: 100px;
}

textarea:focus {
  outline: none !important;
  border: 2px solid #5e89fb;
  box-shadow: 0 0 1px #719ece;
}

span.user-id,
.review-content {
  color: #151d2b;
}

span.stars {
  margin-bottom: 10px;
}

.basic-detail-review {
  margin-top: 10px;
  margin-right: 5px;
  margin-left: 5px;
  list-style-type: none;
  color: #344767;
  font-size: 13px !important;
  line-height: 1.6;
  padding: 15px 30px;
  margin-bottom: 0px;

  background-color: #ced4da60;
}

.basic-detail-review li {
  line-height: 2;
  display: inline;
  margin-right: 20px;
}

.basic-detail-body {
  margin-top: 10px;
  margin-right: 5px;
  margin-left: 5px;
  list-style-type: none;
  color: #344767;
  font-size: 13px !important;
  line-height: 1.6;
  padding: 15px 30px;
  margin-bottom: 0px;

  background-color: #ced4da60;
}

.basic-detail-body li {
  line-height: 1.7;
  display: inline;
  margin-right: 20px;
}

/* https://codepen.io/rikschennink/pen/mjywQb */

.review-content {
  z-index: 1;
  margin-top: 3px;
  margin-left: px;
  margin-right: 5px;
  position: relative;
  margin-bottom: 15px;

  font-size: 14px;
  color: #151d2b;
  /* max-width: 30em; */
  border-radius: 10px;
  background-color: #5e88fb65;
  padding: 10px 20px;
  padding-left: 14px;
  /* font-size: 1.25em; */
  /* border-radius: 1rem; */
  /* box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2); */
}

.review-content::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  bottom: 100%;
  left: 1.5em;
  border: 0.75rem solid transparent;
  border-top: none;

  border-bottom-color: #5e88fb65;
  /* filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1)); */
}
</style>
