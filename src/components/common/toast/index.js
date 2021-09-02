import Toast from './Toast'
 import {createApp} from "vue";

const plugin = {};
plugin.install = function(app){
    // 创建一个组件实例
    const plugin = createApp(Toast);

    // 将组件实例挂载到一个元素上
    const instance = plugin.mount(document.createElement('div'));

    // 将组件的模板挂载到DOM元素上
    document.body.appendChild(instance.$el);

    // 将toast组件封装成全局组件
    app.config.globalProperties.$toast = instance;
}

export default plugin




