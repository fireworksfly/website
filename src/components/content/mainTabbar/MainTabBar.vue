<template>
  <div>
    <TabBar>
      <TabBarItem path="/home" active-color="deeppink">
        <template v-slot:itemIcon>
          <img src = "~assets/img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:itemIconActive>
          <img src = "~assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:itemText>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/category" active-color="deeppink">
        <template v-slot:itemIcon>
          <img  src = "~assets/img/tabbar/category.svg" alt="">
        </template>
        <template v-slot:itemIconActive>
          <img  src = "~assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template v-slot:itemText>
          <div >分类</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/shopcart" active-color="deeppink">
        <template v-slot:itemIcon>
          <img  src = "~assets/img/tabbar/shopcart.svg" alt="">
        </template>
        <template v-slot:itemIconActive>
          <img  src = "~assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        <template v-slot:itemText>
          <div>购物车</div>
        </template>
      </TabBarItem>
      <TabBarItem path="profile" active-color="deeppink">
        <template v-slot:itemIcon>
          <img src = "~assets/img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:itemIconActive>
          <img src = "~assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template v-slot:itemText>
          <div>我的</div>
        </template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBarItem from "../../common/tabbar/TabBarItem";
import TabBar from "../../common/tabbar/TabBar";
export default {
  name: "MainTabBar",
  components:{
    TabBarItem,TabBar
  }
}
</script>

<style scoped>

</style>