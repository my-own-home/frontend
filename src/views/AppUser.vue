<script setup>
// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialInput from "@/components/MaterialInput.vue";
// sections

import Footer from "@/components/User/UserFooter.vue";
import Profile from "@/components/User/AuthorProfile.vue";
import Posts from "@/components/User/AuthorPosts.vue";
import UserModify from "@/components/User/UserModify.vue";
import UserFavLoc from "@/components/User/UserFavLoc.vue";
import UserFavApt from "@/components/User/UserFavApt.vue";
import UserReview from "@/components/User/UserReview.vue";
import UserProfileDetail from "@/components/User/UserProfileDetail.vue";
import CheckPw from "@/components/User/CheckPw.vue";
import UserQna from "@/components/User/UserQna.vue";
import UserQnaForm from "@/components/User/UserQnaForm.vue";
import UserQnaRegisterForm from "@/components/User/UserQnaRegisterForm.vue";
import NavbarCommon from "@/components/common/navbar/NavbarCommon.vue";

// image
import image from "@/assets/img/city-profile.jpg";
</script>
<template>
  <div>
    <NavbarCommon transparent />
    <Header>
      <div
        class="page-header min-height-200"
        :style="{ backgroundImage: `url(${image})` }"
        loading="lazy"
      >
        <span class="mask bg-gradient-dark opacity-8"></span>
      </div>
    </Header>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-6 mb-4">
      <Profile />
      <div class="container">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="user-fav-loc-tab"
              data-bs-toggle="tab"
              data-bs-target="#user-fav-loc"
              type="button"
              role="tab"
              aria-controls="user-fav-loc"
              aria-selected="false"
            >
              관심지역
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="user-fav-apt-tab"
              data-bs-toggle="tab"
              data-bs-target="#user-fav-apt"
              type="button"
              role="tab"
              aria-controls="user-fav-apt"
              aria-selected="false"
            >
              관심아파트
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="user-review-tab"
              data-bs-toggle="tab"
              data-bs-target="#user-review"
              type="button"
              role="tab"
              aria-controls="user-review"
              aria-selected="false"
            >
              리뷰관리
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="user-question-tab"
              data-bs-toggle="tab"
              data-bs-target="#user-question"
              type="button"
              role="tab"
              aria-controls="user-question"
              aria-selected="false"
            >
              1:1 문의
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="user-modify-tab"
              data-bs-toggle="tab"
              data-bs-target="#user-modify"
              type="button"
              role="tab"
              aria-controls="user-modify"
              aria-selected="true"
            >
              회원정보
            </button>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="user-fav-loc"
            role="tabpanel"
            aria-labelledby="user-fav-loc-tab"
          >
            <UserFavLoc />
          </div>
          <div
            class="tab-pane fade"
            id="user-fav-apt"
            role="tabpanel"
            aria-labelledby="user-fav-apt-tab"
          >
            <UserFavApt />
          </div>
          <div class="tab-pane fade" id="user-review" role="tabpanel" aria-labelledby="contact-tab">
            <UserReview />
          </div>
          <div
            class="tab-pane fade"
            id="user-question"
            role="tabpanel"
            aria-labelledby="user-question-tab"
          >
            <UserQna />
          </div>
          <div
            class="tab-pane fade"
            id="user-modify"
            role="tabpanel"
            aria-labelledby="user-modify-tab"
          >
            <!-- <UserProfileDetail /> -->
            <CheckPw />
            <UserModify />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<style scoped>
.modal {
  height: 700px;
}
</style>
