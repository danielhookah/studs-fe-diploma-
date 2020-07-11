import ApiService from '@/common/api-service'

export class AuthService {
  static async getCsrfToken (data) {
    try {
      const response = await ApiService.get('profile/csrf-token', data)
      const token = response.headers['x-csrf-token']
      window.localStorage.setItem('X-CSRF-Token', token)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async login (data) {
    try {
      const response = await ApiService.post('profile/login', data)
      return response
    } catch (e) {
      throw new Error(e)
    }
  }

  static async logout () {
    try {
      const response = await ApiService.post('profile/logout')
      return response
    } catch (e) {
      throw new Error(e)
    }
  }
}
