//导入网络请求
import request from './request';
//创建banner请求
export function getTopBanners(){
  // request请求对象
  return request({
    url:'/banner'
  })
}

export function getHotRecommends(limit){
  return request({
      url:"personalized",
      params:{
        limit
      }
  })
}
export function getNewAlbum(limit){
  return request({
    url:"/top/album",
    params:{
      limit
    }
  })
}