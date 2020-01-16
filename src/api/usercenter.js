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
    params: { "token": token }
  })
}
export function newUserList(data) {
  console.log(data,'请求usercenter所需数据')
  return request({
    url: '/web/home/Store/newUserList',
    method: 'post',
    data: data
  })
}

