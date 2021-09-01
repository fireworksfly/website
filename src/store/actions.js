export  default {
    addCart(context,payload){
       return new Promise((resolve)=>{
           let oldProduct = null;
           for(let item of context.state.cartList){
               if(item.iid === payload.iid){
                   oldProduct = item;
               }
           }
           if(oldProduct){
               context.commit('addCounter',oldProduct);
               resolve('商品数量加1');
           }else{
               payload.count = 1;
               payload.checked = true;
               context.commit('addToCart',payload);
               resolve('添加购物车成功')
           }
       })
    },
    checkClick(context,payload){
        context.commit('checkClick',payload);
    }
}