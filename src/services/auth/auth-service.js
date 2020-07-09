import ApiService from '@/common/api-service'

export class AuthService {
  static async login (data) {
    try {
      const response = await ApiService.post('profile/login', data)
      console.log(response)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async getCsrfToken (data) {
    try {
      const response = await ApiService.get('profile/csrf-token', data)
      console.log(response)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async logout ({ email, password }) {
    try {
      const response = await ApiService.post('qwe', 'qwe')
      console.log(response)
    } catch (e) {
      throw new Error(e)
    }
  }
}
