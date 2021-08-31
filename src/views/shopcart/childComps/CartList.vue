<template>
<div class="cartList">
  <Scroll class="content" :pull-up-load="true" ref="scroll">
   <CartListItem v-for="(item,index) in cartList" :product="item" :key="index"/>
  </Scroll>
</div>
</template>

<script>
import Scroll from "../../../components/common/scoll/Scroll";
import CartListItem from "./CartListItem";
export default {
  name: "CartList",
  components:{Scroll,CartListItem},
  computed:{
    cartList(){
      return this.$store.state.cartList;
    }
  },
  activated(){
    this.$refs.scroll.scroll.refresh();
  }
}
</script>

<style scoped>
.cartList{
  position: relative;
  height: 100vh;
}
.content{
  position: absolute;
  top:44px;
  right: 0;
  left:0;
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>