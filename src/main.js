import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import plugin from "./components/common/toast";


createApp(App).use(store).use(router).use(plugin).mount('#app')




