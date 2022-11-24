import { internalApiInstance } from "../index.js";

const restApi = internalApiInstance();

async function getSidos(success, fail) {
  await restApi.get(`/api/location/sido`).then(success).catch(fail);
}

async function getGuguns(sidoCode, success, fail) {
  await restApi.get(`/api/location/gugun/${sidoCode}`).then(success).catch(fail);
}

async function getDongs(gugunCode, success, fail) {
  await restApi.get(`/api/location/dong/${gugunCode}`).then(success).catch(fail);
}

async function getDongDetail(dongCode, success, fail) {
  await restApi.get(`/api/location/${dongCode}/detail`).then(success).catch(fail);
}

async function getAptsByDong(dongCode, success, fail) {
  await restApi.get(`/api/apts?dongCode=${dongCode}`).then(success).catch(fail);
}

async function getAptAll(aptCode, success, fail) {
  await restApi.get(`/api/apts/${aptCode}/all`).then(success).catch(fail);
}

async function getAptInfo(aptCode, success, fail) {
  await restApi.get(`/api/apts/${aptCode}`).then(success).catch(fail);
}

async function getAptDetail(aptCode, success, fail) {
  await restApi.get(`/api/apts/${aptCode}/detail`).then(success).catch(fail);
}

async function getAptDealRecords(aptCode, success, fail) {
  await restApi.get(`/api/apts/${aptCode}/deals`).then(success).catch(fail);
}

async function getAptDealRecordsWithPage(aptCode, pgno, success, fail) {
  await restApi.get(`/api/apts/${aptCode}/deals?pgno=${pgno}`).then(success).catch(fail);
}

async function getAptDealRecordMonthlyAvgByArea(aptCode, success, fail) {
  await restApi.get(`/api/apts/${aptCode}/deals/monthly-avg`).then(success).catch(fail);
}

async function getAvgAptReview(aptCode, success, fail) {
  await restApi.get(`/api/apts/reviews/avg?aptCode=${aptCode}`).then(success).catch(fail);
}

export {
  getSidos,
  getGuguns,
  getDongs,
  getDongDetail,
  getAptsByDong,
  getAptAll,
  getAptInfo,
  getAptDetail,
  getAptDealRecords,
  getAptDealRecordsWithPage,
  getAptDealRecordMonthlyAvgByArea,
  getAvgAptReview,
};
