import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import 'flowbite'
import Moralis from 'moralis'

const serverUrl = "https://reru8mdohcak.usemoralis.com:2053/server";
const appId = "AYm5bV4q8SOIBkx5GrOmbXdTePXNQTjBw2jUqVTK";

Moralis.start({ serverUrl, appId });

createApp(App)
  .provide('$moralis', Moralis)
  .use(router)
  .use(store)
  .mount('#app')
