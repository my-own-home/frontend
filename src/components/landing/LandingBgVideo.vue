<template>
  <div>
    <video class="bg-video" autoplay muted loop>
      <source :src="src" type="video/mp4" />
    </video>
  </div>
</template>

<script>
function debounce(func, wait, immediate) {
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
}
export default {
  name: "parallax-video",
  data() {
    return {
      debounceTimeout: 6,
    };
  },
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleScroll(scrollVal) {
      let oVal = scrollVal / 3;
      this.styles = {
        transform: `translate3d(0, ${oVal}px,0)`,
      };
    },
    checkForParallax(scrollVal) {
      let fn = debounce(() => this.handleScroll(scrollVal), this.debounceTimeout);
      fn();
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
    object-fit: fill;
    background-position: center center;
    width: 100%;
    height: 100%;
    z-index: -100;
    object-fit: fill;
    display: block;
    margin: 0 auto;
  }

</style>
