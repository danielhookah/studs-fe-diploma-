export default {
  path: '/guest',
  name: 'guest',
  component: () => import(/* webpackChunkName: "about" */ '../layouts/Guest/index.vue'),
  meta: { title: 'home' },
  children: [
    {
      path: 'projects',
      name: 'guest.projects',
      component: () => import('../views/PublicProject'),
      meta: { title: 'home' }
    }
  ]
}
