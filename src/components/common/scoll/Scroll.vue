<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: "Scroll",
  props:{
    probeType:{
      type: Number,
      default:3,
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  data(){
    return{
      scroll:null,
    }
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper,{
       observeDOM:true,
       observeImage:{
         debounceTime: 100
       },
       click: true,
       probeType:this.probeType,
       pullUpLoad: this.pullUpLoad,
    })
    this.scroll.on('scroll',(position)=>{
      this.$emit('showTop',position);
      this.$emit('scrollOn',position);
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp');
    })
  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time);
    }
  }
}
</script>

<style scoped>
.content{
  top:0;
}
</style>