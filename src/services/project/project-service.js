import ApiService from '@/common/api-service'

export class ProjectService {
  static get (subResource = '', params) {
    return ApiService.query(`project/${subResource}`, { params: params })
  }

  static async getItem (id) {
    try {
      const response = await ApiService.get('project', id)
      return response
    } catch (e) {
      throw new Error(e)
    }
  }

  static async create (data) {
    try {
      const response = await ApiService.post('project', data)
      return response
    } catch (e) {
      throw new Error(e)
    }
  }

  static async edit (subResource = '', data) {
    return await ApiService.put(`project/${subResource}`, data)
  }

  static async delete (id) {
    try {
      const response = await ApiService.delete('project', id)
      console.log(response)
    } catch (e) {
      throw new Error(e)
    }
  }
}
