import ApiService from '@/common/api-service'

export class DirectionService {
  static get (subResource = '', params) {
    return ApiService.query(`direction/${subResource}`, { params: params })
  }

  static async getItem (id, dataToPlug) {
    return await ApiService.get('direction', id, { params: dataToPlug })
  }

  static async create (data) {
    return await ApiService.post('direction', data)
  }

  static async edit (subResource = '', data) {
    return await ApiService.put(`direction/${subResource}`, data)
  }

  static async delete (id) {
    return await ApiService.delete(`direction/${id}`)
  }
}
