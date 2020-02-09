<template>
  <div>
    <app-navbar></app-navbar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from "./Components/Navbar/Navbar.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    appNavbar: Navbar
  }
};
</script>

<style>
.container {
  margin-top: 5%;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.2s;
}
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 0.2s;
}
</style>
