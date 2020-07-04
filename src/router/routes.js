import guest from '@/router/guest'
import user from '@/router/user'
import { common, register, confirmAccount, login } from '@/router/common'

export const routes = [
  common,
  register,
  confirmAccount,
  login,
  guest,
  user
]
