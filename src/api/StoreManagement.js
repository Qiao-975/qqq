import request from '@/utils/request'

export function newStaffList(data) {
  // console.log(data,'请求员工列表所需数据')
  return request({
    url: '/web/home/Staff/getStaffList',
    method: 'post',
    data: data
  })
}
export function addStaffList(data) {
  // console.log(data,'请求保存添加员工所需数据')
  return request({
    url: '/web/home/Staff/addStaff',
    method: 'post',
    data: data
  })
}
export function saveStaffList(data) {
  // console.log(data,'请求保存员工管理所需数据')
  return request({
    url: '/web/home/Staff/saveStaff',
    method: 'post',
    data: data
  })
}
export function deleteStaff(data) {
  // console.log(data,'请求传入删除所需数据')
  return request({
    url: '/web/home/Staff/deleteStaff',
    method: 'post',
    data: data
  })
}

