<script setup>
import { onMounted } from "vue";

// example components
// import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import NavbarCommon from "@/components/common/navbar/NavbarCommon.vue";

import NoticeList from "@/components/NoticeList.vue";
import NoticeForm from "@/components/NoticeForm.vue";
import NoticeDetail from "@/components/NoticeDetail.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <notice-list />
</template>
