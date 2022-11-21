<template>
  <div>
    <complex-detail :apt="apt"></complex-detail>
    <transport-detail :apt="apt"></transport-detail>
    <education-detail :apt="apt"></education-detail>
  </div>
</template>

<script>
import ComplexDetail from "@/components/search/sidebar/aptdetail/AptDetailBasicInfoComplex.vue";
import TransportDetail from "@/components/search/sidebar/aptdetail/AptDetailBasicInfoTransport.vue";
import EducationDetail from "@/components/search/sidebar/aptdetail/AptDetailBasicInfoEducation.vue";

export default {
  components: { ComplexDetail, TransportDetail, EducationDetail },

  props: ["apt"],

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
