<template>
  <div>
    <navbar-simple transparent="true"></navbar-simple>

    <header class="bg-gradient-dark">
      <landing-bg-video :src="src"></landing-bg-video>
      <span class="mask bg-gradient-dark opacity-2"></span>

      <div class="container landing-msg-container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white typed-strings"></h1>
            <h1 class="text-white">아파트 찾기</h1>
            <p class="mt-2 mb-4 px-3 text-white opacity-8">
              직방은 믿을 수 있는 구체적인 정보를 제공하는 대한민국 대표 부동산정보 서비스입니다.
              직접 구축한 정보망을 통해 중개사와 이용자를 연결해주며 부동산정보 서비스 시장의
              신뢰도를 높이는 데 기여하고 있습니다.
            </p>
            <search-bar></search-bar>

            <button type="submit" class="btn bg-white text-dark">Create Account</button>
            <h6 class="text-white mb-2 mt-5">Find us on</h6>
            <div class="d-flex justify-content-center">
              <a href="javascript:;"><i class="fab fa-facebook text-lg text-white me-4"></i></a>
              <a href="javascript:;"><i class="fab fa-instagram text-lg text-white me-4"></i></a>
              <a href="javascript:;"><i class="fab fa-twitter text-lg text-white me-4"></i></a>
              <a href="javascript:;"><i class="fab fa-google-plus text-lg text-white"></i></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import bgVideo from "@/assets/vid/apartments.mp4";
import NavbarSimple from "@/components/common/NavbarSimple.vue";
import LandingBgVideo from "@/components/landing/LandingBgVideo.vue";
import SearchBar from "@/components/search/searchbar/SearchBarView.vue";

// sections
import PresentationCounter from "@/views/Presentation/Sections/PresentationCounter.vue";
import PresentationPages from "@/views/Presentation/Sections/PresentationPages.vue";
import PresentationExample from "@/views/Presentation/Sections/PresentationExample.vue";
import data from "@/views/Presentation/Sections/Data/designBlocksData";
import BuiltByDevelopers from "@/views/Presentation/Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "@/views/Presentation/Sections/PresentationTestimonials.vue";
import PresentationInformation from "@/views/Presentation/Sections/PresentationInformation.vue";

export default {
  data() {
    return {
      src: bgVideo,
    };
  },
  components: {
    bgVideo,
    NavbarSimple,
    LandingBgVideo,
    PresentationCounter,
    PresentationPages,
    PresentationExample,
    data,
    BuiltByDevelopers,
    PresentationTestimonials,
    PresentationInformation,
    SearchBar,
  },

  methods: {},

  mounted() {
    window.addEventListener("load", () => {
      // 한글 타이핑 효과: https://seons-dev.tistory.com/entry/%ED%83%80%EC%9D%B4%ED%95%91%ED%95%98%EA%B3%A0-%EC%A7%80%EC%9A%B0%EB%8A%94-JAVASCRIPT

      var typeText = document.querySelector(".typed-strings");
      var textToBeTyped = "서근입니다.";
      let textToBeTypedArr = [
        "아이 키우기 좋은",
        "새로운 출발을 위한",
        "혼자서도 즐거운",
        "가족 모두가 행복한",
      ];
      var index = 0,
        isAdding = true,
        textToBeTypedIndex = 0;

      function playAnim() {
        setTimeout(
          function () {
            // set the text of typeText to a substring of the text to be typed using index.
            typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index);
            if (isAdding) {
              // adding text
              if (index > textToBeTypedArr[textToBeTypedIndex].length) {
                // no more text to add
                isAdding = false;
                //break: wait 2s before playing again
                setTimeout(function () {
                  playAnim();
                }, 2000);
                return;
              } else {
                // increment index by 1
                index++;
              }
            } else {
              // removing text
              if (index === 0) {
                // no more text to remove
                isAdding = true;
                //switch to next text in text array
                textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length;
              } else {
                // decrement index by 1
                index--;
              }
            }
            // call itself
            playAnim();
          },
          isAdding ? 120 : 60
        );
      }
      // start animation
      playAnim();
    });
  },
};
</script>

<style scoped>
.landing-msg-container {
  position: relative;
  width: 100%;

  margin-top: 72px;
  margin-right: auto;
  margin-left: auto;

  padding-top: 10rem;
  padding-bottom: 10rem;
  padding-right: 5.5rem;
  padding-left: 5.5rem;

  background-color: transparent;
}

.typed-strings {
  padding: 0;
  margin: 0;
}
.typed-strings::after {
  content: "|";
  animation: blink 1s step-end infinite;
  color: #fff;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  49% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@media (max-width: 320px) {
  .typed-strings {
    font-size: 2em !important;
  }
}
</style>
