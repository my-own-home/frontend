import { internalApiInstance } from "../index.js";

const api = internalApiInstance();
function listArticle(param, success, fail) {
  api.get(`/api/notices`, { params: param }).then(success).catch(fail);
}

function writeArticle(article, success, fail) {
  api.post(`/api/notices`, JSON.stringify(article)).then(success).catch(fail);
}

function getArticle(articleno, success, fail) {
  api.get(`/api/notices/${articleno}`).then(success).catch(fail);
}

function modifyArticle(article, success, fail) {
  api.put(`/api/notices/${articleno}`, JSON.stringify(article)).then(success).catch(fail);
}

// function deleteArticle(articleno, success, fail) {
//   api.delete(`/board/${articleno}`).then(success).catch(fail);
// }

export default { listArticle, writeArticle, getArticle, modifyArticle };
