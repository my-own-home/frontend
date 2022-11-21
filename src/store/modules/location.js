import { LOCATION } from "@/store/mutation-types.js";
import restApi from "@/util/http-common.js";

const state = {
  sidos: [{ value: null, text: "시/도 선택" }],
  guguns: [{ value: null, text: "구/군 선택" }],
  dongs: [{ value: null, text: "동 선택" }],

  apts: [],
  apt: null,

  mapCenter: null,
  currLoc: null,
};

const getters = {};

const mutations = {
  // setters
  [LOCATION.SET_SIDOS](state, sidos) {
    console.log("SET_SIDOS");
    return sidos.forEach((sido) => {
      state.sidos.push({ value: sido.dongCode, text: sido.sido });
    });
  },

  [LOCATION.SET_GUGUNS](state, guguns) {
    console.log("SET_GUGUNS");
    return guguns.forEach((gugun) => {
      state.guguns.push({ value: gugun.dongCode, text: gugun.gugun });
    });
  },

  [LOCATION.SET_DONGS](state, dongs) {
    console.log("SET_DONGS");
    return dongs.forEach((dong) => {
      state.dongs.push({ value: dong.dongCode, text: dong.dong });
    });
  },

  [LOCATION.SET_APTS](state, apts) {
    console.log("SET_APTS");
    return (state.apts = apts);
  },

  [LOCATION.SET_APT](state, apt) {
    console.log("SET_APT");
    return (state.apt = apt);
  },

  [LOCATION.SET_MAP_CENTER](state, addr) {
    console.log("SET_MAP_CENTER");
    return (state.mapCenter = addr);
  },

  [LOCATION.SET_CURR_LOC](state, loc) {
    console.log("SET_CURR_LOC");
    return (state.currLoc = loc);
  },

  // clear values
  [LOCATION.CLEAR_SIDOS](state) {
    console.log("CLEAR_SIDOS");
    return (state.sidos = [{ value: null, text: "시/도 선택" }]);
  },

  [LOCATION.CLEAR_GUGUNS](state) {
    console.log("CLEAR_GUGUNS");
    return (state.guguns = [{ value: null, text: "구/군 선택" }]);
  },

  [LOCATION.CLEAR_DONGS](state) {
    console.log("CLEAR_DONGS");
    return (state.dongs = [{ value: null, text: "동 선택" }]);
  },

  [LOCATION.CLEAR_APTS](state) {
    console.log("CLEAR_APTS");
    return (state.apts = []);
  },

  [LOCATION.CLEAR_CURR_LOC](state) {
    console.log("CLEAR_CURR_LOC");
    return (state.currLoc = null);
  },

  [LOCATION.CLEAR_MAP_CENTER](state) {
    console.log("CLEAR_MAP_CENTER");
    return (state.mapCenter = null);
  },
};

const actions = {
  [LOCATION.GET_SIDOS](context) {
    return restApi
      .get(`/api/location/sido`)
      .then(({ data }) => {
        console.log("GET_SIDOS");
        context.commit(LOCATION.SET_SIDOS, data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  [LOCATION.GET_GUGUNS](context, sidoCode) {
    return restApi
      .get(`/api/location/gugun/${sidoCode}`)
      .then(({ data }) => {
        console.log("GET_GUGUNS");
        context.commit(LOCATION.SET_GUGUNS, data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  [LOCATION.GET_DONGS](context, gugunCode) {
    return restApi
      .get(`/api/location/dong/${gugunCode}`)
      .then(({ data }) => {
        console.log("GET_DONGS");
        context.commit(LOCATION.SET_DONGS, data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  [LOCATION.GET_APTS](context, dongCode) {
    return restApi
      .get(`/api/apts?dongCode=${dongCode}`)
      .then(({ data }) => {
        console.log("GET_APTS");
        console.log(data);
        context.commit(LOCATION.SET_APTS, data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // 지도의 중심 좌표를 갖고 오기 위해 법정동 주소명 저장(~시/도 ~시/구/군 ~동)
  [LOCATION.GET_MAP_CENTER](context, dongCode) {
    return restApi
      .get(`/api/location/${dongCode}`)
      .then(({ data }) => {
        console.log("GET_CURR_LOC");
        context.commit(LOCATION.SET_MAP_CENTER, `${data.sido} ${data.gugun} ${data.dong}`);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
