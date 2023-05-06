import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import 'transition-style';

createApp(App).use(router).use(store).mount('#app')
