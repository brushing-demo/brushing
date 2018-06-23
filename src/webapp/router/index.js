import Vue from "vue";
import Router from "vue-router";
import Index from "../components/Index.vue";
import BrushingList from "../components/BrushingList.vue";
import Topics from "../components/Topics.vue";
import Test from "../components/Test/Test.vue";

Vue.use(Router);

export function createRouter() {
  const router = new Router({
    mode: "history",
    base: __dirname,
    routes: [
      {
        path: "/",
        name: "Index",
        component: Index
      },
      {
        path: "/brushingList",
        name: "BrushingList",
        component: BrushingList
      },
      {
        path: "/topics",
        name: "Topics",
        component: () => import("../components/Topics.vue")
      },
      {
        path: "/test",
        component: () => import("../components/Test/Test.vue")
      }
    ]
  });
  return router;
}
