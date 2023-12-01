<template>
  <div class="sidebar" v-if="isVisible">
    <nav class="social-icons">
      <!-- Add your social icons here, similar to the ones in AppHeader.vue -->
      <a
        href="https://discord.gg/aygEfaxWeF"
        target="_blank"
        rel="noopener"
        aria-label="Link to Temple Mount Discord"
        ><i class="fab fa-discord"></i
      ></a>
      <a
        href="https://www.youtube.com/@templemountofficial/videos"
        target="_blank"
        rel="noopener"
        aria-label="Link to Temple Mount Youtube"
        ><i class="fab fa-youtube"></i
      ></a>
      <!-- ... other icons ... -->
    </nav>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "AppSidebar",
  setup() {
    const isVisible = ref(false);

    function handleScroll() {
      isVisible.value = window.scrollY > window.innerHeight;
    }

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { isVisible };
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}

.social-icons a {
  display: block;
  margin-bottom: 10px;
  color: white;
  text-align: center;
}

@media (max-width: 768px) {
  .sidebar {
    display: block;
    top: 10px;
    right: 10px;
    transform: none;
  }
}
</style>
