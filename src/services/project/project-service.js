import ApiService from '@/common/api-service'

export class ProjectService {
  static get (subResource = '', params) {
    return ApiService.query(`project/${subResource}`, { params: params })
  }

  static async getItem (id, dataToPlug) {
    return await ApiService.get('project', id, { params: dataToPlug })
  }

  static async create (data) {
    return await ApiService.post('project', data)
  }

  static async edit (subResource = '', data) {
    return await ApiService.put(`project/${subResource}`, data)
  }

  static async delete (id) {
    return await ApiService.delete(`project/${id}`)
  }

  static async applyUser (data) {
    return await ApiService.post(`project/${data.projectId}/apply/${data.userId}`, data)
  }
}
