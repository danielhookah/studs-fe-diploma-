export default {
  path: '/user',
  name: 'user',
  component: () => import('../layouts/User/index.vue'),
  meta: { title: 'user' },
  children: [
    // NEWS
    {
      path: 'news',
      name: 'user.news',
      component: () => import('../views/user/News/index.vue'),
      meta: { title: 'user.news' }
    },
    // PROJECTS
    {
      path: 'projects',
      name: 'user.projects',
      component: () => import('../views/user/PublicProject/index.vue'),
      meta: { title: 'user.projects' }
    },
    // SETTINGS
    {
      path: 'settings',
      name: 'user.settings',
      component: () => import('../views/user/Settings/index.vue'),
      meta: { title: 'user.settings' }
    },
    // REST ???
    {
      path: 'child',
      name: 'user.child',
      component: () => import('../views/About.vue'),
      meta: { title: 'user' }
    }
  ]
}
