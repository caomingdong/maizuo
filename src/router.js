// 1、
import Vue from "vue";
// 2、
import Router from "vue-router";
import VueRouter from "vue-router";
// 3、
Vue.use(Router);

// 4、定义路由规则
const routes = [
  //对像即是路由的规则；
  //1级
  {
    path: "/",
    component: () => import("./views/Home/index.vue"),
    children: [
      //2级
      {
        path: "films",
        component: () => import("./views/Home/Films/index.vue"),
        children: [
          // 3级
          {
            path: "nowPlaying",
            component: () => import("./views/Home/Films/NowPlaying.vue")
          },
          {
            path: "comingSoon",
            component: () => import("./views/Home/Films/ComingSoon.vue")
          }
        ]
      },
      {
        path: "cinemas",
        component: () => import("./views/Home/Cinemas.vue")
      },
      {
        path: "center",
        component: () => import("./views/Home/Center.vue")
      }
    ]
  },
  {
    path: "/city",
    component: () => import("./views/City/index.vue")
  },
  {
    path: "/login",
    component: () => import("./views/Login/index.vue")
  },
  {
    path: "/film/:filmId",
    component: () => import("./views/Film/index.vue")
  },
  {
    path: "/money",
    component: () => import("./views/Money/index.vue")
  }
];

// 5、路由的实例对象
export default new VueRouter({
  routes: routes
});
