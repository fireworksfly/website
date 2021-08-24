<template>
  <Swiper>
    <SwiperItem v-for="(item,index) in banners" :key="index" class="swiper">
      <a :href="item.link">
        <img :src="item.image">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper";
export default {
  name: "HomeSwiper",
  components:{Swiper,SwiperItem},
  props:{
    banners:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
.swiper{
  padding-top: 44px;
}
</style>