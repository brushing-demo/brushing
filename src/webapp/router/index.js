import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import About from '../components/About.vue'
import Topics from '../components/Topics.vue'
import Test from '../components/test/Test.vue'

Vue.use(Router)

export function createRouter() {
  const router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/topics',
        name: 'Topics',
        component: () => Topics
      },
      {
        path: '/test',
        component: () => import('../components/test/Test.vue')
      }
    ]
  });
  return router;
}
