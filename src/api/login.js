import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
export function newlogin(data) {
  return request({
    url: '/web/api/Login/loginos',
    method: 'post',
    data: data
  })
}
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
export function newgetInfo(token) {
  return request({
    url: '/web/api/User/getUserInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
