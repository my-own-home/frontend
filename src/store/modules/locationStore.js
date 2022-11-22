import { LOCATION } from "@/store/mutation-types.js";
import {
  getSidos,
  getGuguns,
  getDongs,
  getAptsByDong,
  getAptAll,
  getAptInfo,
  getAptDetail,
  getAptDealRecords,
} from "@/api/modules/location";

const state = {
  sidos: [{ value: null, text: "시/도 선택" }],
  guguns: [{ value: null, text: "구/군 선택" }],
  dongs: [{ value: null, text: "동 선택" }],
  currDongCode: null,

  apts: [],
  apt: null,

  geocoder: null,
  mapCenter: null,
  currLoc: null,
};

const getters = {
  [LOCATION.GETTER_SIDOS](state) {
    return state.sidos;
  },
  [LOCATION.GETTER_GUGUNS](state) {
    return state.guguns;
  },
  [LOCATION.GETTER_DONGS](state) {
    return state.dongs;
  },

  [LOCATION.GETTER_DONGCODE](state) {
    return state.currDongCode;
  },

  [LOCATION.GETTER_APT](state) {
    return state.apt;
  },
  [LOCATION.GETTER_APTS](state) {
    return state.apts;
  },
  [LOCATION.GETTER_MAP_CENTER](state) {
    return state.mapCenter;
  },
};

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

  [LOCATION.SET_DONGCODE](state, dongCode) {
    console.log("SET_DONGCODE");
    return (state.currDongCode = dongCode);
  },

  [LOCATION.SET_GEOCODER](state, geocoder) {
    console.log("SET_GEOCODER");
    return (state.geocoder = geocoder);
  },

  [LOCATION.SET_APTS](state, apts) {
    console.log("SET_APTS");
    return (state.apts = apts);
  },

  [LOCATION.SET_APT](state, apt) {
    console.log("SET_APT");
    return (state.apt = apt);
  },

  [LOCATION.SET_MAP_CENTER](state, latlng) {
    console.log("SET_MAP_CENTER");
    return (state.mapCenter = latlng);
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
  async [LOCATION.GET_SIDOS](context) {
    await getSidos(
      ({ data }) => {
        console.log("GET_SIDOS");
        context.commit(LOCATION.SET_SIDOS, data);
      },
      (error) => {
        console.log(error);
      }
    );
  },

  async [LOCATION.GET_GUGUNS](context, sidoCode) {
    await getGuguns(
      sidoCode,
      ({ data }) => {
        console.log("GET_GUGUNS");
        context.commit(LOCATION.SET_GUGUNS, data);
      },
      (error) => {
        console.log(error);
      }
    );
  },

  async [LOCATION.GET_DONGS](context, gugunCode) {
    await getDongs(
      gugunCode,
      ({ data }) => {
        console.log("GET_DONGS");
        context.commit(LOCATION.SET_DONGS, data);
      },
      (error) => {
        console.log(error);
      }
    );
  },

  async [LOCATION.GET_APTS](context, dongCode) {
    await getAptsByDong(
      dongCode,
      ({ data }) => {
        console.log("GET_APTS");
        console.log(data);
        context.commit(LOCATION.SET_APTS, data);
      },
      (error) => {
        console.log(error);
      }
    );
  },

  // 지도의 중심 좌표를 갖고 오기 위해 법정동 주소명 저장(~시/도 ~시/구/군 ~동)
  // [LOCATION.GET_MAP_CENTER](context, address) {
  //   restApi
  //     .get(`/api/location/${dongCode}`)
  //     .then(({ data }) => {
  //       console.log("GET_CURR_LOC");
  //       context.commit(LOCATION.SET_MAP_CENTER, `${data.sido} ${data.gugun} ${data.dong}`);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
