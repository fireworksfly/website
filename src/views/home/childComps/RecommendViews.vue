<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendViews",
  props:{
    recommends:{
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend{

  display: flex;
  font-size: 10px;
  padding: 10px 0 15px;
  border-bottom: 10px solid #eee;
}
.recommendItem{
  flex:1;
  text-align: center;
}
.recommendItem img{
  margin-bottom: 5px;
  width: 65px;
  height: 65px;
}
</style>