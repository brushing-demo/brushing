import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './router'
import {createStore} from "./vuex/store";
// import { sync } from 'vuex-router-sync';


export function createApp() {
  const router = createRouter();
  const store = createStore();
  // aync(store, router);
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });
  return {app, router, store};
}


