import { internalApiInstance } from "../index.js";

const restApi = internalApiInstance();

async function login(user, success, fail) {
  await restApi.post(`/api/user/info/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  restApi.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await restApi.get(`/user/info/${userid}`).then(success).catch(fail);
}

async function regenerateToken(user, success, fail) {
  restApi.defaults.headers["refresh-token"] = sessionStorage.getItem("refresh-token"); // axios header에 refresh-token 셋팅
  await restApi.post(`/user/refresh`, user).then(success).catch(fail);
}

async function logout(userid, success, fail) {
  await restApi.get(`/user/logout/${userid}`).then(success).catch(fail);
}

export { login, findById, regenerateToken, logout };
