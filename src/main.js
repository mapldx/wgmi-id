import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import 'flowbite'
import Moralis from 'moralis'

const serverUrl = "https://jyltvrxzqb41.usemoralis.com:2053/server";
const appId = "mZqzSnGjzeYGE1GrWRET8rXbdKn2ucRo4zJfsmKg";

Moralis.start({ serverUrl, appId });

createApp(App)
  .provide('$moralis', Moralis)
  .use(router)
  .use(store)
  .mount('#app')
