<template>
  <div id="app" class="dark-mode">
    <AppHeader :showNav="showNav" @toggle-nav="toggleMenu" />
    <AppSidebar :class="{ 'is-visible': showNav }" />
    <AppMain :videos="podcasts" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import AppSidebar from "./components/AppSidebar.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppSidebar,
  },
  data() {
    return {
      showNav: false,
      podcasts: [],
    };
  },
  methods: {
    toggleMenu() {
      this.showNav = !this.showNav;
    },
    handleResize() {
      if (window.innerWidth >= 769) {
        this.showNav = true;
      } else {
        this.showNav = false;
      }
    },
  },
  checkHeaderVisibility() {
    const headerHeight = document.querySelector(".main-header").offsetHeight;
    this.showNav = window.scrollY > headerHeight;
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.checkHeaderVisibility);
    this.handleResize();
    this.checkHeaderVisibility(); // Initial check
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.checkHeaderVisibility);
  },
};
</script>

<style scoped>
body,
ul {
  margin: 0;
  padding: 0;
}

#app {
  color: #eee;
  background-color: #000000;
  font-family: "MedievalSharp", cursive;
}

@import url("https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
