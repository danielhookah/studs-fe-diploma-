export default {
  path: '/user',
  name: 'user',
  component: () => import('../layouts/User/index.vue'),
  meta: { title: 'user' },
  children: [
    {
      path: 'news',
      name: 'user.news',
      component: () => import('../views/user/News/index.vue'),
      meta: { title: 'user.news' }
    },
    {
      path: 'child',
      name: 'user.child',
      component: () => import('../views/About.vue'),
      meta: { title: 'user' }
    }
  ]
}
