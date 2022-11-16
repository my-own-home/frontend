<template>
  <div class="accordion basic-container">
    <div class="accordion-item">
      <h6 class="accordion-header" id="education-accordion-heading">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#education-accordion-collapse"
        >
          학군 정보
        </button>
      </h6>
      <div
        id="education-accordion-collapse"
        class="accordion-collapse collapse show"
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
</template>

<script>
export default {
  data() {
    return {
      transport: {
        subway: "3호선 대치역",
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.basic-container {
  margin-top: 5px;
  height: auto;
  width: 100% !important;

  background-color: #f9f9f9;
}

.accordion-button {
  padding: 10px 15px !important;
  font-weight: bold;
  color: #344767;
}

.accordion-button:after {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23344767'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !important;
}

.accordion-body {
  padding: 10px 15px !important;
}

p {
  color: #344767;
  font-size: 13px !important;
  margin-bottom: 5px;
}

ul {
  list-style-type: none;
  color: #344767;
  font-size: 13px !important;
  line-height: 1.6;
  padding: 15px 10px;
  background-color: #ced4da60;
}

li {
  line-height: 1.7;
}

.basic-detail-head {
  font-weight: 600;
}

table {
  border-collapse: collapse;
  color: #344767;

  margin-bottom: 0;
  border-style: hidden;
}

tr:first-child {
  border-top: 0.6px solid #6c757d !important;
}

tr:last-child {
  border-bottom: 1px solid #6c757d !important;
}

th {
  width: 25%;
}

td {
  width: 75%;
}
</style>
