<template>
  <div class="tabBarItem" @click="click">
   <div v-if="!isActive"> <slot name="itemIcon"></slot></div>
    <div v-else> <slot name="itemIconActive"></slot></div>
    <div :style="activeStyle"><slot name="itemText"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor:{
      type: String,
      default: 'red'
    }
  },
  data(){
    return{
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive? {color:this.activeColor}:{};
    }
  },
  methods:{
    click(){
      this.$router.replace(this.path);
    }
  }
}
</script>

<style>
.tabBarItem{
  flex: 1;
  text-align: center;
  height: 29px;
  font-size: 5px;
}
.tabBarItem  img{
  margin-top: 2px;
  margin-bottom: -1px;
  width: 29px;
  height: 29px;
}
</style>