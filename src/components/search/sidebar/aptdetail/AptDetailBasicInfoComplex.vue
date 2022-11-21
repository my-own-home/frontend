<template>
  <div class="detail-basics">
    <h6>단지 정보</h6>
    <table class="table">
      <tbody>
        <tr>
          <th>법정동 주소</th>
          <td>{{ this.apt.basic.fullJibunAddress }}</td>
        </tr>
        <tr>
          <th>도로명 주소</th>
          <td>{{ this.apt.basic.fullRoadAddress }}</td>
        </tr>
        <tr>
          <th>동수/세대수</th>
          <td>{{ this.apt.detail.dongCount }}개동/{{ this.apt.detail.householdCount }}세대</td>
        </tr>
        <tr>
          <th>사용승인일</th>
          <td>
            {{ this.apt.detail.approveDate.substring(0, 4) }}년
            {{ this.apt.detail.approveDate.substring(5, 7) }}월
            {{ this.apt.detail.approveDate.substring(8, 10) }}일
          </td>
        </tr>
        <tr>
          <th>난방방식</th>
          <td>{{ this.apt.detail.heatType }}</td>
        </tr>
        <tr>
          <th>복도유형</th>
          <td>{{ this.apt.detail.corridorType }}</td>
        </tr>
        <tr>
          <th>관리사무소</th>
          <td>{{ this.apt.detail.adminTel }}</td>
        </tr>
        <tr>
          <th>건설사/시공사</th>
          <td>{{ this.apt.detail.constructorName }} / {{ this.apt.detail.implementerName }}</td>
        </tr>
      </tbody>
    </table>
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
