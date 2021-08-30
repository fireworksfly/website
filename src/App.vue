<template>
  <div id = "app">
    <router-view v-slot="{ Component }">
      <keep-alive include="Home,CateGory,Profile,shopCart">
        <component  :is="Component" />
      </keep-alive>
    </router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabbar/MainTabBar";

export default {
  name:'app',
  components:{
    MainTabBar
  }
}
</script>
<style>
@import "./assets/css/base.css";
</style>
