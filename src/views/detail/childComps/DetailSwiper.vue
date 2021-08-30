<template>
<div class="detailSwiper">
  <Swiper>
    <SwiperItem  class="swiperItem" v-for="(item,index) in topImages" :key="index">
      <img :src="item" alt="">
    </SwiperItem>
  </Swiper>
</div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper";
export default {
  name: "DetailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  activated() {
    console.log(this.topImages);
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
.swiperItem{
  height:300px;
  overflow: hidden;
}
</style>