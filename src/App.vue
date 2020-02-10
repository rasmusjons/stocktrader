<template>
    <div>
        <app-navbar></app-navbar>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <button>API</button>
    </div>
</template>

<script>
import Navbar from "./Components/Navbar/Navbar.vue";
import store from "./store/store";
import { mapActions } from "vuex";

export default {
    name: "app",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    components: {
        appNavbar: Navbar
    },
    created() {
        this.$store.dispatch("getData");
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
