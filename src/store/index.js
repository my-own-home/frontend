import { createStore } from "vuex";
import locationStore from "./modules/locationStore.js";
import userStore from "./modules/userStore.js";

export default createStore({
  modules: { locationStore, userStore },
});

// const store = createStore({
//   plugins: [
//     createPersistedState({
//       storage: sessionStorage, // 브라우저 종료 시 제거, default: localStorage
//     }),
//   ],
// });

// this.$store.registerModule(locationStore);
