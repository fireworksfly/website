<template>
<div id="home">
  <NavBar class="homeNav">
    <template v-slot:center>
     购物街
  </template>
  </NavBar>
 <TabControl :titles="['流行','新款','精选']" class="tabControlTwo" @tabClick="change" v-show="isFixed" ref="tabControlT"></TabControl>
  <Scroll class="content" ref="scroll" @showTop="showTop" :pull-up-load="true" @pullingUp="learnMore">
  <HomeSwiper :banners="banners"/>
  <RecommendViews :recommends="recommends"/>
  <FeatureView/>
    <div class="parent">
    <TabControl :titles="['流行','新款','精选']" class="tabControl" @tabClick="change" ref="tabControl"></TabControl>
    </div>
  <GoodList :goods="showGoods"></GoodList>
  </Scroll>
  <BackTop @click="backTop" v-show="isShow"/>
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
import Scroll from "../../components/common/scoll/Scroll";
import BackTop from "../../components/content/backTop/BackTop";


export default {
  name: "Home",
  components: {NavBar,HomeSwiper,RecommendViews,FeatureView,TabControl,GoodList,Scroll,BackTop},
  data(){
    return{
      banners: [],
      recommends: [],
      goods:{
        pop:{page:0,list: []},
        new:{page:0,list: []},
        sell:{page:0,list: []}
      },
      currentType:'pop',
      isShow: false,
      isFixed:false,
      tabOffSetTop: 0,
      saveY:100,
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  updated() {
    this.tabOffSetTop = this.$refs.tabControl.$el.offsetTop;
  },
  activated() {
     this.$refs.scroll.scrollTo(0,this.saveY,15);
     this.$refs.scroll.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
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
      this.$refs.tabControlT.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0);
    },
    showTop(position){
      this.isShow = (-position.y) > 600;

      // 设置tabControl是否需要吸附
      this.isFixed = (-position.y) >= this.tabOffSetTop - 44;
    },
    learnMore(){
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.finishPullUp();
    }
  }
}
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.homeNav{
  background-color: var(--color-tint);
  color: #ffffff;
}

.tabControl{
  position: sticky;
  top: 44px;
  z-index: 1;
}

.tabControlTwo{
  position:relative;
  z-index: 10;
}
.content{
  position:absolute;
  height: calc(100vh - 44px);
  overflow: scroll;
  bottom: 49px;
}
</style>