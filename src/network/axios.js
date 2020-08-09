import axios from 'axios'
//导出一个rquest实例.config是调动该函数时需要传的配置参数
export function request(config) {
  //创建axios实例
  const instanse = axios.create({
    //baseURL:'',
    timeout:5000
  })
  //发送网络请求
  return instanse(config)
}
// 别的地方以如下方式调用
// request({
//   url:'',
// }).them(res=>{
//   //res就是传过来的数据
// }).catch(err=>{
//   //err就是错误信息
// })