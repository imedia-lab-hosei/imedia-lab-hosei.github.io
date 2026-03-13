import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'

// 创建实例
const service: AxiosInstance = axios.create({
  baseURL: '/api', // 所有的请求都会自动加上 /api 前缀
  timeout: 5000    // 5秒超时
})

// 响应拦截器：可以在这里统一处理错误码
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 直接返回后端定义的 JSON 数据 (success, data, error)
    return response.data
  },
  (error) => {
    console.error('网络请求异常:', error)
    return Promise.reject(error)
  }
)

export default service
