import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/assets/styles/index.scss"
import store from '@/store/index';

createApp(App).use(router).use(store).mount('#app')
