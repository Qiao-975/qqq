import request from '@/utils/request'


export function newlogin(data) {
  return request({
    url: '/web/Login/loginos',
    method: 'post',
    data: data
  })
}

export function newgetInfo(token) {
  return request({
    url: '/web/User/getUserInfo',
    method: 'get',
    params: { token }
  })
}
export function newUserList(data) {
  console.log(data,'qingqiu')
  return request({
    url: '/web/home/Store/newUserList',
    method: 'post',
    data
  })
}

