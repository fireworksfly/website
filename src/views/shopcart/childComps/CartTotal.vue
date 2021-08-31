<template>
  <div id="cart_total">
    <div @click="checkClick" style="display: flex;">
      <CheckButton :isChecked="checkAll" ref="checkButtonRef" />全选
    </div>
    <div class="calc">总计：￥{{ totalPrice}}</div>
    <div class="buy">去购买({{ totalLength }})</div>
  </div>
</template>
<script>
import CheckButton from "../../../components/content/checkButton/CheckButton";
export default {
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
    checkedItem() {
      return this.cartList.filter((item) => item.checked === true);
    },
    totalLength() {
      return this.checkedItem.length;
    },
    totalPrice() {
      return this.checkedItem.reduce(
        (pre, curr) => pre + curr.count * curr.price, 0);
    },
    checkAll() {
      if (this.cartList.length === 0) {
        return false;
      } else {
        return this.cartList.every(value => value.checked === true);
      }
    }
  },
  components: {
    CheckButton,
  },
  methods: {
    checkClick() {
      let checkFlag = !this.checkAll;
      this.cartList.forEach(item => (item.checked = checkFlag));
    },
  }
};
</script>
<style scoped>
#cart_total {
  font-size: 0.7rem;
  height: 1.9rem;
  display: flex;
  background-color: rgb(228, 228, 228);
  line-height: 1.9rem;
  text-align: center;
}

.calc {
  flex: 1;
}
.buy {
  width: 5rem;
  background-color: #f03;
  color: white;
}
</style>
