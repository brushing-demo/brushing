import Vue from 'vue'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from './App.vue'
import {createRouter} from './router'
import {createStore} from "./vuex/store";
// import { sync } from 'vuex-router-sync';

Vue.use(ElementUI);

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


