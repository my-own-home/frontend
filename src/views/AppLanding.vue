<template>
  <div>
    <navbar-simple sticky="true"></navbar-simple>

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
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
      <PresentationCounter />
      <PresentationInformation />
      <PresentationExample :data="data" />
      <PresentationPages />
      <BuiltByDevelopers />

      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <FilledInfoCard
              class="p-4"
              :color="{ text: 'white', background: 'bg-gradient-success' }"
              :icon="{ component: 'flag', color: 'white' }"
              title="Getting Started"
              description="Check the possible ways of working with our product and the necessary files for building your own project."
              :action="{
                route: 'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
                label: { text: 'Let\'s start', color: 'white' },
              }"
            />
          </div>
          <div class="col-lg-4">
            <FilledInfoCard
              class="px-lg-1 mt-lg-0 mt-4 p-4"
              height="h-100"
              :icon="{ component: 'precision_manufacturing', color: 'success' }"
              title="Plugins"
              description="Get inspiration and have an overview about the plugins that we
                used to create the Material Kit."
              :action="{
                route: 'https://www.creative-tim.com/learning-lab/vue/input/material-kit/',
                label: { text: 'Read more' },
              }"
            />
          </div>
          <div class="col-lg-4">
            <FilledInfoCard
              class="px-lg-1 mt-lg-0 mt-4 p-4"
              :icon="{ component: 'receipt_long', color: 'success' }"
              title="Utility Classes"
              description="Material Kit is giving you a lot of pre-made elements. For those
                who want flexibility, we included many utility classes."
              :action="{
                route: 'https://www.creative-tim.com/learning-lab/vue/utilities/material-kit/',
                label: { text: 'Read more' },
              }"
            />
          </div>
        </div>
      </div>
      <PresentationTestimonials />

      <div
        class="container-fluid mt-sm-5 border-radius-xl"
        :style="{
          background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
        }"
      >
        <div
          class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
          :style="{
            backgroundImage: `url(${wavesWhite})`,
          }"
          loading="lazy"
        >
          <span class="mask bg-gradient-dark"></span>
          <div class="container">
            <div class="row">
              <div class="d-flex justify-content-center p-5">
                <div class="col-lg-8 ms-lg-5 text-center">
                  <h3 class="text-white">
                    Do you love this awesome UI Kit from Vuejs & Bootstrap?
                  </h3>
                  <p class="text-white text-md">
                    Cause if you do, it can be yours for FREE. Hit the button below to navigate to
                    Creative Tim where you can <br />
                    find the Design System in HTML. Start a new project or give an old Bootstrap
                    project a new look!
                  </p>

                  <a
                    href="https://www.creative-tim.com/product/vue-material-kit"
                    class="btn btn-sm mb-0 bg-gradient-success px-5 py-3 mt-4"
                    >Download Now</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="d-flex flex-column w-100 text-center p-5 mb-8">
            <h3>Available on these technologies</h3>
            <div class="d-flex justify-content-center mt-3 flex-wrap">
              <a
                href="https://www.creative-tim.com/product/material-kit"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Bootstrap 5 - Most popular front-end component library"
              >
                <img :src="logoBootstrap" alt="title" loading="lazy" :style="{ height: '90px' }" />
              </a>
              <a
                class="opacity-5 ms-3"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Coming Soon"
              >
                <img :src="logoTailwind" alt="title" loading="lazy" :style="{ height: '90px' }" />
              </a>
              <a
                href="https://www.creative-tim.com/product/vue-material-kit-pro"
                class="mx-3"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Vue.js - Is a Progressive JavaScript Framework"
              >
                <img :src="logoVue" alt="title" loading="lazy" :style="{ height: '90px' }" />
              </a>
              <a
                class="opacity-5"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Coming Soon"
              >
                <img :src="logoAngular" alt="title" loading="lazy" :style="{ height: '90px' }" />
              </a>
              <a
                href="https://www.creative-tim.com/product/material-kit-react-pro"
                class="mx-3"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="React – A JavaScript library for building user interfaces"
              >
                <img :src="logoReact" alt="title" loading="lazy" :style="{ height: '90px' }" />
              </a>
              <a
                class="opacity-5"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Coming Soon"
              >
                <img :src="logoSketch" alt="title" loading="lazy" :style="{ height: '90px' }" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 ms-auto">
              <h4 class="mb-1">Thank you for your support!</h4>
              <p class="lead mb-0">We deliver the best web products</p>
            </div>
            <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
              <MaterialSocialButton
                route="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-design-system-pro"
                component="twitter"
                color="twitter"
                label="Tweet"
              />
              <MaterialSocialButton
                route="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-design-system-pro"
                component="facebook-square"
                color="facebook"
                label="Share"
              />
              <MaterialSocialButton
                route=""
                component="pinterest"
                color="pinterest"
                label="Pin it"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import bgVideo from "@/assets/vid/apartments.mp4";
import NavbarSimple from "@/components/common/NavbarSimple.vue";
import LandingBgVideo from "@/components/landing/LandingBgVideo.vue";

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
