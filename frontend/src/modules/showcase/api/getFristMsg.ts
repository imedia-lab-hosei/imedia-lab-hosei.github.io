import request from '@/api/request'

// 1. 定义后端返回的通用结构
interface ApiResponse<T> {
  success: boolean
  data: T
  error?: string
}

// 2. 导出具体的方法
export const getHelloMessage = () => {
  // 这里的 <ApiResponse<string>> 告诉 TS：这个接口返回的是一个字符串
  return request.get<any, ApiResponse<string>>('/hello')
}

// 示例：未来发布文章的方法
// export const createPost = (data: { title: string, content: string }) => {
//   return request.post<any, ApiResponse<number>>('/posts', data)
// }
