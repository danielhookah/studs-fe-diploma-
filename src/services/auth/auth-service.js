import ApiService from '@/common/api-service'

export class AuthService {
  static async login ({ email, password }) {
    try {
      const response = await ApiService.post('qwe', 'qwe')
      console.log(response)
    } catch (e) {
      throw new Error(e)
    }
  }
}
