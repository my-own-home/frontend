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
      <h4>{{ this.apt.name }}</h4>
      <p class="mb-0"><i class="bi bi-geo-alt-fill"></i> {{ this.apt.roadAddress }}</p>
      <p class="mb-0">
        {{ this.apt.buildDate }} / {{ this.apt.households }}세대 / {{ this.apt.buildings }}동
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apt: {
        name: "은마",
        jibunAddress: "서울특별시 강남구 대치동 316 은마아파트",
        roadAddress: "서울시 강남구 삼성로 212",
        buildings: 28,
        households: 4424,
        buildYear: "1979",
        buildMonth: "08",
        buildDay: "30",
        heatingType: "지역난방",
        corridorType: "복도식",
        adminTel: "025677608",
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
h4 {
  font-size: 24px !important;
  margin-bottom: 8px;
}
.name-container {
  position: relative;
  height: auto;
  width: 100% !important;

  padding-top: 16px;
  padding-bottom: 11.2px;
  padding-right: 16px;
  padding-left: 20px;

  background-color: #f9f9f9;
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
