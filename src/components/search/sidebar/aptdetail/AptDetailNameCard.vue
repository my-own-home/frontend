<template>
  <div class="name-container">
    <div class="star-btn">
      <!-- 채운 별은 bi-star-fill, click event 여기에 걸기-->
      <i class="bi bi-star"></i>
    </div>

    <!-- <div class="share-btn">
      <i class="bi bi-share-fill"></i>
    </div> -->

    <div>
      <h4>{{ this.apt.basic.aptName }}</h4>
      <p class="mb-0 apt-name-detail">
        <i class="bi bi-geo-alt-fill"></i> {{ this.apt.basic.fullRoadAddress }}
      </p>
      <p class="mb-0 apt-name-detail">
        {{ this.apt.detail.approveDate.substring(0, 4) }}년
        {{ this.apt.detail.approveDate.substring(5, 7) }}월
        {{ this.apt.detail.approveDate.substring(8, 10) }}일 /
        {{ this.apt.detail.householdCount }}세대 / {{ this.apt.detail.dongCount }}동
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["apt"],

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
h4 {
  font-size: 20px !important;
  margin-bottom: 8px;
}
.apt-name-detail {
  font-size: 13px !important;
}

.name-container {
  position: relative;
  height: auto;
  width: 100% !important;

  padding-top: 16px;
  padding-bottom: 11.2px;
  padding-right: 16px;
  padding-left: 20px;

  background-color: #fff;
}
.name-container > p {
  font-size: 14.4px !important;
}

.star-btn,
.share-btn {
  position: absolute;
}
.star-btn {
  top: 8px;
  right: 30px;
  font-size: 32px;
  color: #ffcf36;
}

.share-btn {
  bottom: 20px;
  right: 35px;
  font-size: 23px;
}
</style>
