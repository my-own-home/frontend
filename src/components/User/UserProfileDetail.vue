<script setup>
// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

// sections

import Footer from "@/components/User/UserFooter.vue";
import Profile from "@/components/User/AuthorProfile.vue";
import Posts from "@/components/User/AuthorPosts.vue";
import UserModify from "@/components/User/UserModify.vue";
import UserFavLoc from "@/components/User/UserFavLoc.vue";
import UserFavApt from "@/components/User/UserFavApt.vue";
import UserReview from "@/components/User/UserReview.vue";
import UserProfielDetail from "@/components/User/UserProfileDetail.vue";

// image
import image from "@/assets/img/city-profile.jpg";
</script>
<template>
  <div>
    <div id="profileDetail">
      <div class="row mb-1">
        <div class="col-auto">
          <i class="material-icons">email</i>
          <span class="h6 me-1">&nbsp 이메일 : </span>
          <span>{{ user.email }}</span>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-auto">
          <i class="material-icons">today</i>
          <span class="h6 me-1">&nbsp 가입일 : </span>
          <span>{{ user.regTime }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userid: "ssafy",
        name: "김싸피",
        email: "ssafy@google.com",
        regTime: "2022-11-16",
      },
    };
  },
};
</script>

<style></style>
