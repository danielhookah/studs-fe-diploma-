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
      return response
    } catch (e) {
      throw new Error(e)
    }
  }

  static async edit (subResource = '', data) {
    return await ApiService.put(`user/${subResource}`, data)
  }
}
