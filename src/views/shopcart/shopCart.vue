<template>
  <div id="main">
 <NavBar class="bar">
   <template v-slot:center>
     <div>
     购物车 ({{cartLength}})
     </div>
   </template>
 </NavBar>
  <CartList class="cart"/>
    <CartTotal class="cartTotal"></CartTotal>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartTotal from "./childComps/CartTotal";
export default {
  name: "shopCart",
  components:{CartTotal, CartList, NavBar},
  computed:{
    cartLength(){
      return this.$store.state.cartList.length;
    }
  }
}
</script>
<style scoped>
#main{
  position: relative;
}
.bar{
  background-color: var(--color-tint);
  color: #ffffff;
}
.cartTotal{
  position: absolute;
  bottom: 44px;
  right: 0;
  left: 0;
}
</style>