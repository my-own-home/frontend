<template>
  <div>
    <video class="bg-video" autoplay muted loop>
      <source :src="src" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      debounceTimeout: 6,
    };
  },
  props: {
    src: {},
  },
  methods: {
    handleScroll(scrollVal) {
      let oVal = scrollVal / 3;
      this.styles = {
        transform: `translate3d(0, ${oVal}px,0)`,
      };
    },

    checkForParallax(scrollVal) {
      let fn = this.debounce(() => this.handleScroll(scrollVal), this.debounceTimeout);
      fn();
    },

    debounce(func, wait, immediate) {
      let timeout;
      return function () {
        const context = this,
          args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          timeout = null;
          if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
      };
    },
  },

  mounted() {
    let self = this;
    window.addEventListener("scroll", function () {
      let scrollVal = this.scrollY;
      self.checkForParallax(scrollVal);
    });
  },
};
</script>

<style>
.bg-video {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  z-index: 0;
  margin: 0 auto;

  object-fit: cover;
  background-position: center center;
  background-size: 100% 100%;
  display: block;
}
</style>
