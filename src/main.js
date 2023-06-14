import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import store from "@/store";
import axios from "axios";
import VueAxios from "vue-axios";

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";

// Font Awesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSchool,
  faBabyCarriage,
  faChildren,
  faCartShopping,
  faStore,
  faMugSaucer,
  faLandmark,
  faPalette,
  faHouse
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSchool,
  faBabyCarriage,
  faChildren,
  faCartShopping,
  faStore,
  faMugSaucer,
  faLandmark,
  faPalette,
  faHouse
);

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$filters = {
  price(value) {
    let inputNumber = value * 10000;
    let unitWords = ["", "만", "억", "조", "경"];
    let splitUnit = 10000;
    let splitCount = unitWords.length;
    let resultArray = [];
    let resultString = "";
    if (!value) return value;
    else {
      for (let i = 0; i < splitCount; i++) {
        let unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
        unitResult = Math.floor(unitResult);
        if (unitResult > 0) {
          resultArray[i] = unitResult;
        }
      }
      for (let i = 0; i < resultArray.length; i++) {
        if (!resultArray[i]) continue;
        resultString = String(" " + resultArray[i]) + unitWords[i] + resultString;
      }
      return resultString;
    }
  },
};

app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
app.use(store);
app.use(materialKit);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
