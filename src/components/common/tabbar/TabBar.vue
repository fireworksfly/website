<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainTabBar"
}
</script>

<style scoped>
 #tabBar{
   display: flex;
   height: 49px;
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   background: cornsilk;
   box-shadow: 0 -1px 1px rgba(100,100,100,0.2) ;
   position: fixed;
   z-index: 2;
 }
</style>