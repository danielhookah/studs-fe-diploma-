export default {
  path: '/',
  name: 'common',
  component: () => import('@/views/index'),
  meta: { title: 'home' },
  redirect: '/guest/projects',
  children: [
    {
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
    },
    {
      path: 'sign-up',
      name: 'register',
      component: () => import('@/views/Register'),
      meta: { title: 'register' }
    },
    {
      path: 'sign-in',
      name: 'login',
      component: () => import('@/views/Login'),
      meta: { title: 'login' }
    },
    {
      path: 'mail/confirm-account/:hash',
      name: 'confirm.account',
      component: () => import('@/views/ConfirmAccount'),
      meta: { title: 'confirm.account' }
    }
  ],
  beforeEnter (to, from, next) {
    if (window.getCookie('authl') === '1') {
      next('/user/news')
    } else {
      next()
    }
  }
}
