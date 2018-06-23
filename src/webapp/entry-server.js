import {createApp} from "./main";

//核心目的有2个
//摘取每一个当前路由 index/test -> vue router=>compents
//compents异步的数据组装成一个页面
//把后端请求的这套流程的数据交给 context.state
export default context => {
  return new Promise((resolve, reject) => {
    const {app, router, store} = createApp();
    //后台真实的路由 a/b
    //router->前端的路由，context.url->后台给的环境
    router.push(context.url);
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      Promise.all(matchedComponents.map((Component) => {
        if (Component.asyncData) {
          return Component.asyncData({
            store
            // route:router.currentRoute
          });
        }
      })).then(() => {
        //读取完
        context.state = store.state;
        resolve(app);
      }).catch(reject);
    }, reject);

  })
}


