import { internalApiInstance } from "../index.js";

const restApi = internalApiInstance();

async function getSidos() {
  return restApi.get(`/api/location/sido`).catch((error) => {
    console.log(error);
  });
}

async function getGuguns(sidoCode) {
  return restApi.get(`/api/location/gugun/${sidoCode}`).catch((error) => {
    console.log(error);
  });
}

async function getDongs(gugunCode) {
  return restApi.get(`/api/location/dong/${gugunCode}`).catch((error) => {
    console.log(error);
  });
}

async function getAptsByDong(dongCode) {
  return restApi.get(`/api/apts?dongCode=${dongCode}`).catch((error) => {
    console.log(error);
  });
}

async function getAptAll(aptCode) {
  return restApi.get(`/api/apts/${aptCode}/all`).catch((error) => {
    console.log(error);
  });
}

async function getAptInfo(aptCode) {
  return restApi.get(`/api/apts/${aptCode}`).catch((error) => {
    console.log(error);
  });
}

async function getAptDetail(aptCode) {
  return restApi.get(`/api/apts/${aptCode}/detail`).catch((error) => {
    console.log(error);
  });
}

async function getAptDealRecords(aptCode) {
  return restApi.get(`/api/apts/${aptCode}/deals`).catch((error) => {
    console.log(error);
  });
}

export {
  getSidos,
  getGuguns,
  getDongs,
  getAptsByDong,
  getAptAll,
  getAptInfo,
  getAptDetail,
  getAptDealRecords,
};
