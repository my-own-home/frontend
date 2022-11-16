<template>
  <div class="detail-basics">
    <h6>단지 정보</h6>
    <table class="table">
      <tbody>
        <tr>
          <th>법정동 주소</th>
          <td>{{ this.apt.jibunAddress }}</td>
        </tr>
        <tr>
          <th>도로명 주소</th>
          <td>{{ this.apt.roadAddress }}</td>
        </tr>
        <tr>
          <th>동수/세대수</th>
          <td>{{ this.apt.buildings }}개동/{{ this.apt.households }}세대</td>
        </tr>
        <tr>
          <th>사용승인일</th>
          <td>{{ this.apt.buildYear }}년 {{ this.apt.buildMonth }}월 {{ this.apt.buildDay }}일</td>
        </tr>
        <tr>
          <th>난방방식</th>
          <td>{{ this.apt.heatingType }}</td>
        </tr>
        <tr>
          <th>복도유형</th>
          <td>{{ this.apt.corridorType }}</td>
        </tr>
        <tr>
          <th>관리사무소</th>
          <td>{{ this.apt.adminTel }}</td>
        </tr>
      </tbody>
    </table>
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
.detail-basics {
  margin-top: 2px;
  height: auto;
  width: 100% !important;

  padding: 18px 15px;

  background-color: #f9f9f9;
  font-size: 13px;
}

h6 {
  padding-left: 1px;
}

table {
  border-collapse: collapse;
  color: #344767;

  margin-bottom: 0;
}

tr:first-child {
  border-top: 0.6px solid #6c757d !important;
}

tr:last-child {
  border-style: hidden;
  border-bottom: 0.6px solid #6c757d !important;
}

th {
  background-color: #ced4da60 !important;
  width: 25%;
}

td {
  width: 75%;
}
</style>
