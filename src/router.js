import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Views/Home.vue';
import PageContent from '@/components/Views/PageContent.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: { name: 'Rules' },
      children: [
        {
          path: 'rules',
          name: 'Rules',
          component: PageContent,
        },
      ],
    },
    {
      path: '*',
      name: 'NotFound',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "NotFound" */ '@/components/Router/NotFound'),
    },
  ],
});
