import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotFound from '@/components/common/404'
import MainLayout from '@/components/common/main-layout'

Vue.use(Router);
let routes = [
  {
    path: '/404',
    component: NotFound,
    name: '404',
    redirect: '/game/404',
    meta: {
      requiresAuth: true
    }
  },{
    path: '/',
    redirect: '/game/pokemon/recipe'
  },{
    path: '/game', //要加/，不然会一直history
    name: 'game',
    children: [{
      path: 'pokemon',
      redirect: 'pokemon/recipe',
      component: MainLayout,
      name: 'Pokemon Quest',
      children: [{
        path: 'pokemon',
        component: HelloWorld,
        name: '宝可梦',
      },{
        path: 'recipe',
        component: HelloWorld,
        name: '食谱',
      }]
    }]
  },{
    path: '*',
    name: 'other',
    redirect: {path: '/game/404'}
  }
];

let menuCount = routes.length;

routes[menuCount - 2].children.forEach(route => {
  if (route.children) {
    if (!route.meta) route.meta = {};
    route.meta.children = route.children;
  }
});

export default new Router({
  mode: 'history',
  routes: routes
})



