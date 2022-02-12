import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import 'flowbite'
import Moralis from 'moralis'

const serverUrl = "https://zpzpbhhvgoyy.usemoralis.com:2053/server";
const appId = "PQ3nYuZI13BoOgLSaUM0ECpcadF7SlfZjbVAXQOU";

Moralis.start({ serverUrl, appId });

createApp(App)
  .provide('$moralis', Moralis)
  .use(router)
  .use(store)
  .mount('#app')
