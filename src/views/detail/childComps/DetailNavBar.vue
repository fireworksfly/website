<template>
  <NavBar class="navBar">
    <template v-slot:left>
      <div @click="backClick">
      <img src="~assets/img/common/back.svg" alt="" class="back">
      </div>
    </template>
    <template v-slot:center>
      <div class="title">
     <div v-for="(item,index) in titles"
          :key="index"
          class="titleItem"
          @click="itemClick(index)"
          :class="{active: currentIndex === index}">{{item}}</div>
      </div>
    </template>
  </NavBar>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components:{NavBar},
  data(){
    return{
      titles: ['商品', '参数', '详情', '推荐'],
      currentIndex:0,
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit("itemClick",index);
    },
    backClick(){
      this.$router.go(-1);
    },
  }
}
</script>

<style scoped>
.title{
  display: flex;
  font-size: 13px;
}
.titleItem{
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.back{
  margin-top: 10px;
}

.navBar{
  background-color: #eeeeee;
}
</style>