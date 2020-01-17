import request from '@/utils/request'


// export function newlogin(data) {
//   return request({
//     url: '/web/Login/loginos',
//     method: 'post',
//     data: data
//   })
// }

// export function newgetInfo(token) {
//   return request({
//     url: '/web/User/getUserInfo',
//     method: 'get',
//     params: { "token": token }
//   })
// }
// export function newUserList(data) {
//   console.log(data,'请求usercenter所需数据')
//   return request({
//     url: '/web/home/Store/newUserList',
//     method: 'post',
//     data: data
//   })
// }
export function newStaffList(data) {
  console.log(data,'请求店铺管理所需数据')
  return request({
    url: '/web/home/Staff/getStaffList',
    method: 'post',
    data: data
  })
}
export function addStaffList(data) {
  console.log(data,'请求店铺管理所需数据')
  return request({
    url: '/web/home/Staff/addStaff',
    method: 'post',
    data: data
  })
}
export function saveStaffList(data) {
  console.log(data,'请求店铺管理所需数据')
  return request({
    url: '/web/home/Staff/saveStaff',
    method: 'post',
    data: data
  })
}
export function deleteStaff(data) {
  console.log(data,'请求店铺管理所需数据')
  return request({
    url: '/web/home/Staff/deleteStaff',
    method: 'post',
    data: data
  })
}

