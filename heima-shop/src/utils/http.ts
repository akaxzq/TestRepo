import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1.非http开头
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2.设置超时时间，默认60s
    options.timeout = 10000
    // 3.添加小程序请求头（后端识别）
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 4.添加token请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
    console.log(options)
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

// export const http = (options:UniApp.RequestOptions)=>{
//   // 1.返回Promise对象
//   return new Promise(
//   (resolve,reject)=>{
//     uni.request({
//       ...options,
//       // 2.请求成果
//       success(res){
//         resolve(res)
//       },
//     })
//   }
//   )
// }
