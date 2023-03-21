import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import './fonts/index.scss';
import './styles/index.scss';

console.log(axios);
createApp(App)
.use(router)
.mount('#app')
