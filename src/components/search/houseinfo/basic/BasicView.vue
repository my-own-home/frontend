<template>
  <div>
    <house-detail></house-detail>
    <house-transport></house-transport>
    <house-education></house-education>
  </div>
</template>

<script>
import HouseDetail from "@/components/search/houseinfo/basic/BasicHouseDetail.vue";
import HouseTransport from "@/components/search/houseinfo/basic/BasicTransport.vue";
import HouseEducation from "@/components/search/houseinfo/basic/BasicEducation.vue";

export default {
  components: { HouseDetail, HouseTransport, HouseEducation },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>

</style>