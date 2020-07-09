import ApiService from '@/common/api-service'

export class UserService {
  static get (subResource = '', params) {
    return ApiService.query(`user/${subResource}`, params)
  }

  static async getItem (id) {
    try {
      const response = await ApiService.get('user', id)
      return response
    } catch (e) {
      throw new Error(e)
    }
  }

  static async create (data) {
    try {
      const response = await ApiService.post('user', data)
      console.log(response)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async edit ({ email, password }) {
    try {
      const response = await ApiService.put('qwe', 'qwe')
      console.log(response)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async delete ({ email, password }) {
    try {
      const response = await ApiService.delete('qwe', 'qwe')
      console.log(response)
    } catch (e) {
      throw new Error(e)
    }
  }
}
