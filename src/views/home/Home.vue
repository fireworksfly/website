<template>
<div id="home">
  <NavBar class="homeNav">
    <template v-slot:center>
     购物街
  </template>
  </NavBar>
  <HomeSwiper :banners="banners"/>
  <RecommendViews :recommends="recommends"/>
  <FeatureView/>
  <TabControl :titles="['流行','新款','精选']" class="tabControl" @tabClick="change"></TabControl>
  <GoodList :goods="showGoods"></GoodList>

</div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendViews from "./childComps/RecommendViews";
import {getHomeMultidata,getHomeGoods} from "../../network/home";
import FeatureView from "./childComps/FeatureView";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodList from "../../components/content/goods/GoodList";


export default {
  name: "Home",
  components: {NavBar,HomeSwiper,RecommendViews,FeatureView,TabControl,GoodList},
  data(){
    return{
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0,list: []},
        'new':{page:0,list: []},
        'sell':{page:0,list: []}
      },
      currentType:'pop',
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list;
    }
  },
  methods:{
    /* 网络请求相关方法 */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page+1;
      getHomeGoods(type,page).then(res =>{
         this.goods[type].list.push(...res.data.list);
         this.goods[type].page++;
      })
    },
    change(index){
      switch (index){
        case 0:
          this.currentType = 'pop'
              break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }

    }
  }
}
</script>

<style scoped>
.homeNav{
  background-color: var(--color-tint);
  color: #ffffff;
}
.tabControl{
  position: sticky;
  top: 44px;
  z-index: 10;
}
</style>