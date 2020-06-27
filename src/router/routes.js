import guest from '@/router/guest'
import user from '@/router/user'
import { common, register, confirmAccount } from '@/router/common'

export const routes = [
  common,
  register,
  confirmAccount,
  guest,
  user
]
