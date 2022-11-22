import { createStore } from "vuex";
import locationStore from "@/store/modules/locationStore.js";
import userStore from "@/store/modules/userStore.js";
import createPersistedState from "vuex-persistedstate";

// const userState = createPersistedState({
//   paths: [""],
// });

// const dataState = createPersistedState({
//   paths: ["data"],
// });

export default createStore({
  modules: {
    locationStore,
    userStore,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});

// const store = createStore({
//   plugins: [
//     createPersistedState({
//       storage: sessionStorage, // 브라우저 종료 시 제거, default: localStorage
//     }),
//   ],
// });

// this.$store.registerModule(locationStore);
