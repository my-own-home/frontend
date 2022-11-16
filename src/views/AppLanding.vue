<template>
  <div>
    <navbar-simple sticky="true"></navbar-simple>
    <header class="bg-gradient-dark">
      <landing-bg-video src="vid/apartments.mp4"></landing-bg-video>
      <span class="mask bg-gradient-light opacity-3"></span>
      <div class="container">
        <div class="row justify-content-center">
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import bgVideo from "@/assets/vid/apartments.mp4";

import NavbarSimple from "@/components/common/NavbarSimple.vue";
import LandingBgVideo from "@/components/landing/LandingBgVideo.vue";
</script>

<style scoped>
.container {
  z-index: 2;
  padding-top: 12vh;
  padding-bottom: 40px;
}
</style>
