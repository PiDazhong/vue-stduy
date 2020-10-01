import axios from '../plugins/Axios'

class VirtualList {
  /**
   * 获取虚拟列表数据
   * @param
   * @returns {*}
   */
  getVirtualList(id) {
    return axios.request({
      url: `serve/api/vueStudy/virtualList/${id}`,
      method: 'get',
      params: {}
    })
  }
}

const virtualList = new VirtualList()
export default virtualList
