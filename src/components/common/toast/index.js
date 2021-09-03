import Toast from './Toast'
 import {createApp} from "vue";

const plugin = {};
plugin.install = function(app){
    // 创建一个组件实例,这里创建的Vue实例并没有el属性,需要自己进行手动添加。
    /* 当Vue实例没有el属性时，则创建的实例尚没有挂载到某个dom中 */
    const plugin = createApp(Toast);

    // 在Dom元素上创建一个div元素上，将组件挂载到这个div元素上,这样就会有属性
    const instance = plugin.$mount(document.createElement('div'));

    // 将组件的template模板挂载到DOM元素上
    document.body.appendChild(instance.$el);

    // 将toast组件封装成全局组件
    app.config.globalProperties.$toast = instance;
}

export default plugin




