import ApiService from '@/common/api-service'

export class UserService {
  static async getList ({ email, password }) {
    try {
      const response = await ApiService.query('qwe', 'qwe')
      console.log(response)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async getItem ({ email, password }) {
    try {
      const response = await ApiService.get('qwe', 'qwe')
      console.log(response)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async create ({ email, password }) {
    try {
      const response = await ApiService.post('qwe', 'qwe')
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
