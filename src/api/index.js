import axios from "axios";

function internalApiInstance() {
  const instance = axios.create({
    baseURL: import.meta.env.HOUSE_MATCH_API_BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

export { internalApiInstance };
