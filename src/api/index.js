import axios from "axios";

function internalApiInstance() {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_HOUSE_MATCH_API_BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

function kakaoApiInstance() {
  const instance = axios.create({
    headers: {
      Authorization: import.meta.env.VITE_HOUSE_MATCH_KAKAO_REST_API_KEY,
    },
  });
  return instance;
}

export { internalApiInstance, kakaoApiInstance };
