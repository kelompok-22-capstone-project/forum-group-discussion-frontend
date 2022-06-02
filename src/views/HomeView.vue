<template>
  <v-app>
    <create-thread></create-thread>
    <hello-world />
    <header-view />
    <left-bar />
    <right-bar />
  </v-app>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import HeaderView from "../components/Layout/Header";
import LeftBar from "../components/Layout/Leftbar.vue";
import RightBar from "../components/Layout/Rightbar.vue";
import CreateThread from '@/components/Createthread.vue';

export default {
  name: "HomeView",

  components: {
    HelloWorld,
    HeaderView,
    LeftBar,
    RightBar,
    CreateThread
},
};
</script>
