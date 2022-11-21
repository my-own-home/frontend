<template>
  <div class="search-options">
    <div class="search-option col-sm-3">
      <select v-model="sidoCode" class="form-control" @change="gugunList">
        <option v-for="(sido, index) in sidos" :key="index" :value="sido.value">
          {{ sido.text }}
        </option>
      </select>
    </div>
    <div class="search-option col-sm-3">
      <select v-model="gugunCode" class="form-control" @change="dongList">
        <option v-for="(gugun, index) in guguns" :key="index" :value="gugun.value">
          {{ gugun.text }}
        </option>
      </select>
    </div>
    <div class="search-option col-sm-3">
      <select v-model="dongCode" class="form-control" @change="aptList">
        <option v-for="(dong, index) in dongs" :key="index" :value="dong.value">
          {{ dong.text }}
        </option>
      </select>
    </div>
    <div class="col-sm-1 ml-auto">
      <span class="btn btn-light rounded-circle">
        <!-- <i class="fas fa-search"></i> -->
        <i class="bi bi-search-heart"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { LOCATION } from "@/store/mutation-types.js";

const locationStore = "locationStore";

export default {
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
      dongCode: null,
    };
  },

  computed: {
    ...mapState(locationStore, ["sidos", "guguns", "dongs"]),

    // sidoList: this.$store.getters["location/sidoList"],
    // ...mapGetters(["sidoList", "gugunList", "dongList"]),
  },

  methods: {
    ...mapActions(locationStore, [
      LOCATION.GET_SIDOS,
      LOCATION.GET_GUGUNS,
      LOCATION.GET_DONGS,
      LOCATION.GET_APTS,
      LOCATION.GET_MAP_CENTER,
    ]),
    ...mapMutations(locationStore, [
      LOCATION.CLEAR_GUGUNS,
      LOCATION.CLEAR_DONGS,
      LOCATION.CLEAR_APTS,
      LOCATION.CLEAR_MAP_CENTER,
    ]),

    gugunList() {
      console.log(this.sidoCode);

      this[LOCATION.CLEAR_APTS]();
      this[LOCATION.CLEAR_DONGS]();
      this[LOCATION.CLEAR_GUGUNS]();

      this.gugunCode = null;
      this.dongCode = null;

      if (this.sidoCode) {
        this[LOCATION.GET_GUGUNS](this.sidoCode);
      }
    },

    dongList() {
      console.log(this.gugunCode);

      this[LOCATION.CLEAR_APTS]();
      this[LOCATION.CLEAR_DONGS]();

      this.dongCode = null;
      if (this.gugunCode) {
        this[LOCATION.GET_DONGS](this.gugunCode);
      }
    },

    aptList() {
      console.log(this.dongCode);

      this[LOCATION.CLEAR_APTS]();
      this[LOCATION.CLEAR_MAP_CENTER]();

      if (this.dongCode) {
        this[LOCATION.GET_APTS](this.dongCode);
        this[LOCATION.GET_MAP_CENTER](this.dongCode);
      }
    },
  },

  created() {
    this[LOCATION.CLEAR_DONGS]();
    this[LOCATION.CLEAR_GUGUNS]();
    this[LOCATION.GET_SIDOS]();
  },
};
</script>

<style scoped>
.form-control {
  padding: 0 0;
}

.search-options {
  display: flex;
  align-items: center;
  text-align: center;
  height: 40px;
  width: 450px;
  margin: auto;
  /* background-color: #ffffff; */
  background-color: pink;
  border-radius: 110px;
  justify-content: center;
}

.search-options > :nth-last-child(2) {
  border: none;
}

.search-option {
  width: 8.5rem;
  border-right: 1px solid #dadada;
}

.search-option:hover {
  cursor: pointer;
  padding: 5px 0;
  background-color: #e7e7e7;
  border-radius: 110px;
}

select {
  text-align: center;
  text-align-last: center;
  /* border: 1px solid black; */
  font-size: inherit;
  cursor: pointer;
}

.btn {
  margin: 0 auto;
  font-size: 10px;
  width: 10px;
  padding-left: 15px;
}
</style>
