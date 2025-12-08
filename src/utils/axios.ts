import axios, { AxiosError } from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export interface ApiResponse<T> {
  data: T | null
  error: string | null
}

export async function apiRequest<Payload, Response>(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  payload?: Payload,
): Promise<ApiResponse<Response>> {
  try {
    const response = await api.request<Response>({ method, url, data: payload })

    return { data: response.data, error: null }
  } catch (err: unknown) {
    let errorMessage = 'Unknown error'

    if (err instanceof AxiosError) errorMessage = err.response?.data?.message || err.message

    return { data: null, error: errorMessage }
  }
}
