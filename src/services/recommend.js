//导入网络请求
import request from './request';
//创建banner请求
export default function getTopBanners(){
  // request请求对象
  return request({
    url:'/banner'
  })
}