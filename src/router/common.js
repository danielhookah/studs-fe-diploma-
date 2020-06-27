const common = {
  path: '/',
  name: 'common',
  component: () => import('../views/About'),
  meta: { title: 'home' }
}

const register = {
  path: '/sign-up',
  name: 'register',
  component: () => import('../views/Register'),
  meta: { title: 'register' }
}

const confirmAccount = {
  path: '/confirm-account',
  name: 'confirm.account',
  component: () => import('../views/ConfirmAccount'),
  meta: { title: 'confirm.account' }
}

export {
  common,
  confirmAccount,
  register
}
