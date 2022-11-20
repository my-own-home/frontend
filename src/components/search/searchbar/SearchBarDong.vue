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
        <i class="fas fa-search"></i>
        <!-- <i class="bi bi-search-heart"></i> -->
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

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
    ...mapActions(locationStore, ["getSidos", "getGuguns", "getDongs", "getApts", "getCurrLoc"]),
    ...mapMutations(locationStore, ["clearGuguns", "clearDongs", "clearApts", "clearCurrLoc"]),

    gugunList() {
      console.log(this.sidoCode);

      this.clearApts();
      this.clearDongs();
      this.clearGuguns();

      this.gugunCode = null;
      this.dongCode = null;

      if (this.sidoCode) {
        this.getGuguns(this.sidoCode);
      }
    },

    dongList() {
      console.log(this.gugunCode);

      this.clearApts();
      this.clearDongs();

      this.dongCode = null;
      if (this.gugunCode) {
        this.getDongs(this.gugunCode);
      }
    },

    aptList() {
      console.log(this.dongCode);

      this.clearApts();
      this.clearCurrLoc();

      if (this.dongCode) {
        this.getApts(this.dongCode);
        this.getCurrLoc(this.dongCode);
      }
    },
  },

  created() {
    this.clearDongs();
    this.clearGuguns();
    this.getSidos();
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

/* .btn {
  margin: 0 auto;
  border-radius: 100%;


  width: 100%;
  height: 80%;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;

  align-items: center !important;
  text-align: center !important;
  font-size: 15px;
} */

/* .btn > .fas {
  margin: 0 0;
  padding: 0 0;
} */
</style>
