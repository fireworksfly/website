<template>
  <div id="detail">
    <DetailNavBar @itemClick="changeScroll" ref="navBarRef"/>
    <Scroll class="content" :probe-type="3" :pull-up-load="true" ref="scroll" @scrollOn="scrollOn">
      <DetailSwiper :top-images="topImages" ref="swiper"/>
      <DetailBaseInfo :goods="goods"/>
      <DetailShopInfo :shop="shop"/>
      <DetailGoodsInfo :detail-info="detailInfo"/>
      <DetailParamInfo :param-info="paramInfo" ref="param"/>
      <DetailComment :comment="commentInfo" ref="comment"/>
      <GoodList :goods="recommend" ref="recommend"/>
    </Scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import {getDetail, Goods,Shop,GoodsParam,getRecommend} from "../../network/detail";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "../../components/common/scoll/Scroll";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailComment from "./childComps/DetailComment";
import GoodList from "../../components/content/goods/GoodList";
export default {
  name: "Detail",
  components:{
    GoodList,
    DetailNavBar,DetailSwiper,DetailBaseInfo,DetailShopInfo,Scroll,DetailGoodsInfo,DetailParamInfo,DetailComment},
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommend:[],
      themeY:[],
      detailIndex:0,
      theme:['swiper','param','comment','recommend'],
    }
  },
   created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res=>{
      const data = res.result;
       this.topImages = res.result.itemInfo.topImages;
       this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      // 取出评论信息
      if(data.rate.cRate != 0){
        this.commentInfo = data.rate.list[0];
      }
    })
     // 得到推荐信息
     getRecommend().then(res => {
       this.recommend = res.data.list;
     })
  },
  methods:{
    changeScroll(index){
        this.$refs.scroll.scroll.scrollToElement(this.$refs[this.theme[index]].$el,100);
    },
    getPosY(){
      this.themePosY = [0];
      this.themePosY.push(this.$refs.param.$el.offsetTop);
      this.themePosY.push(this.$refs.comment.$el.offsetTop);
      this.themePosY.push(this.$refs.recommend.$el.offsetTop);
    },
    scrollOn(pos){
      this.getPosY();
      for (let i = 0; i < this.themePosY.length - 1; ++i) {
        if (
            // this.detailIndex != i &&
            -pos.y >= this.themePosY[i] &&
            -pos.y < this.themePosY[i + 1]
        ) {
          console.log('1123456');
          this.detailIndex = i;
          this.$refs.navBarRef.currIndex = i;
          break;
        }
      }
    }
  }
}
</script>

<style scoped>
#detail{
  position:relative;
  background-color: #ffffff;
  z-index: 10;
  height: 100vh;
}
.content{
  position: absolute;
  top:44px;
  height: calc(100% - 44px);
}
</style>