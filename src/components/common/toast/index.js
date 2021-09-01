import Toast from './Toast'
 import {createApp} from "vue";

const plugin = {};
plugin.install = function(app){
    const plugin = createApp(Toast);
    const instance = plugin.mount(document.createElement('div'));
    document.body.appendChild(instance.$el);
    app.config.globalProperties.$toast = instance;
}

export default plugin




