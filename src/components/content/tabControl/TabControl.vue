<template>
  <div class="tabControl">
    <div v-for="(item,index) in titles"
         class="tabControlItem"
         :class="{active: currentIndex === index}"
         :key="index"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return{
      currentIndex:0
    }
  },
  props:{
    titles:{
       type:Array,
       default(){
         return[];
       }
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style scoped>
.tabControl{
  display: flex;
  text-align: center;
  background-color: #ffffff;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.tabControlItem {
  flex:1;
  position: relative;
}
.active {
  color: var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
  padding-bottom: 5px;
}
</style>