import { createStore } from "vuex";
import locationStore from "./modules/location.js";

export default createStore({
  modules: { locationStore },
});

// const store = createStore({
//   plugins: [
//     createPersistedState({
//       storage: sessionStorage, // 브라우저 종료 시 제거, default: localStorage
//     }),
//   ],
// });

// this.$store.registerModule(locationStore);
