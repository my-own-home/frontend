import { kakaoApiInstance } from "../index.js";

const restApi = kakaoApiInstance();

async function getPlaces(query, x, y, radius, category_group_code, success, fail) {
  await restApi
    .get(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=${query}&x=${x}&y=${y}&radius=${radius}&category_group_code=${category_group_code}`
    )
    .then(success)
    .catch(fail);
}

export { getPlaces };
