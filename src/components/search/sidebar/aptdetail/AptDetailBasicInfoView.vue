<template>
  <div>
    <div class="detail-basics">
      <h6><i class="material-icons">apartment</i> 단지 정보</h6>
      <table class="table">
        <tbody>
          <tr>
            <th>법정동 주소</th>
            <td>{{ apt.basic?.fullJibunAddress }}</td>
          </tr>
          <tr>
            <th>도로명 주소</th>
            <td>{{ apt.basic?.fullRoadAddress }}</td>
          </tr>
          <tr>
            <th>동수/세대수</th>
            <td>{{ apt.detail?.dongCount }}개동/{{ apt.detail?.householdCount }}세대</td>
          </tr>
          <tr>
            <th>사용승인일</th>
            <td>
              {{ apt.detail?.approveDate.substring(0, 4) }}년
              {{ apt.detail?.approveDate.substring(5, 7) }}월
              {{ apt.detail?.approveDate.substring(8, 10) }}일
            </td>
          </tr>
          <tr>
            <th>난방방식</th>
            <td>{{ apt.detail?.heatType }}</td>
          </tr>
          <tr>
            <th>복도유형</th>
            <td>{{ apt.detail?.corridorType }}</td>
          </tr>
          <tr>
            <th>관리사무소</th>
            <td>{{ apt.detail?.adminTel }}</td>
          </tr>
          <tr>
            <th>건설사/시공사</th>
            <td>{{ apt.detail?.constructorName }} / {{ apt.detail?.implementerName }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="detail-basic-accordion accordion accordion-flush" id="transport-accordion">
      <div class="accordion-item">
        <h6 class="accordion-header" id="transport-accordion-heading">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#transport-accordion-collapse"
            data-bs-parent="#transport-accordion"
            aria-expanded="false"
            aria-controls="transport-accordion-collapse"
          >
            <i class="material-icons">commute</i> &nbsp;교통 정보
          </button>
        </h6>
        <div
          id="transport-accordion-collapse"
          class="accordion-collapse collapse"
          aria-labelledby="transport-accordion-heading"
        >
          <div class="accordion-body">
            <div class="basic-detail-list">
              <p class="basic-detail-head"><i class="material-icons">subway</i> 지하철역</p>
              <ul class="basic-detail-body">
                <li><strong>3호선</strong> 대치역 (약 00m)</li>
                <li><strong>3호선</strong> 대치역 (약 00m)</li>
                <li><strong>3호선</strong> 대치역 (약 00m)</li>
              </ul>
            </div>
            <div class="basic-detail-list">
              <p class="basic-detail-head"><i class="material-icons">train</i> KTX</p>
              <ul class="basic-detail-body">
                <li>해당하는 역이 없습니다. (사실은 있음)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-basic-accordion accordion accordion-flush" id="education-accordion">
      <div class="accordion-item">
        <h6 class="accordion-header" id="education-accordion-heading">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#education-accordion-collapse"
            data-bs-parent="#education-accordion"
          >
            <i class="material-icons">school</i> &nbsp;학군 정보
          </button>
        </h6>
        <div
          id="education-accordion-collapse"
          class="accordion-collapse collapse"
          aria-labelledby="education-accordion-heading"
        >
          <div class="accordion-body">
            <div class="basic-detail-list">
              <p class="basic-detail-head"><i class="material-icons">subway</i> 지하철역</p>
              <ul class="basic-detail-body">
                <li><strong>3호선</strong> 대치역 (약 00m)</li>
                <li><strong>3호선</strong> 대치역 (약 00m)</li>
                <li><strong>3호선</strong> 대치역 (약 00m)</li>
              </ul>
            </div>
            <div class="basic-detail-list">
              <p class="basic-detail-head"><i class="material-icons">train</i> KTX</p>
              <ul class="basic-detail-body">
                <li>해당하는 역이 없습니다. (사실은 있음)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const SERVICE_KEY = import.meta.env.VITE_HOUSE_MATCH_KAKAO_MAP_API_KEY;

export default {
  props: ["apt"],

  data() {
    return {
      ps: null,
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

  padding: 15px 15px;

  background-color: #f9f9f9;
  font-size: 13px;
}

.detail-basics h6 {
  padding-left: 1px;
}

.detail-basics table {
  border-collapse: collapse;
  color: #344767;

  margin-bottom: 0;
}

.detail-basics table tr:first-child {
  border-top: 0.6px solid #6c757d !important;
}

.detail-basics table tr:last-child {
  border-style: hidden;
  border-bottom: 0.6px solid #6c757d !important;
}

.detail-basics table th {
  background-color: #ced4da60 !important;
  width: 25%;
}

.detail-basics table td {
  width: 75%;
}

/*------------------------
    accordion
-------------------------*/

.detail-basic-accordion {
  margin-top: 5px;
  height: auto;
  width: 100% !important;

  background-color: #f9f9f9;
}

.detail-basic-accordion .accordion-button {
  padding: 10px 15px !important;
  font-weight: bold;
  color: #344767;
}

.detail-basic-accordion .accordion-button:after {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23344767'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !important;
}

.detail-basic-accordion .accordion-body {
  padding: 10px 15px !important;
}

.detail-basic-accordion p {
  color: #344767;
  font-size: 13px !important;
  margin-bottom: 5px;
}

.detail-basic-accordion ul {
  list-style-type: none;
  color: #344767;
  font-size: 13px !important;
  line-height: 1.6;
  padding: 15px 10px;
  background-color: #ced4da60;
}

.detail-basic-accordion li {
  line-height: 1.7;
}

.detail-basic-accordion .basic-detail-head {
  font-weight: 600;
}
</style>
