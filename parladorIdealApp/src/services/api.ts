import axios, { AxiosResponse } from "axios"
import { FormUserData } from "../components/SignUpForm"

export const api = axios.create({ baseURL: 'http://192.168.1.14:3333/api/', headers: { 'Content-Type': 'application/json' } })
export const createUser = async (data: FormUserData) => {
  const response: AxiosResponse<{ code: string, message: string }> = await api
    .post(`/user/register`, JSON.stringify(data))
    .then((response) => response)
  return response
}
export const getPosts = async () => {
  const response: AxiosResponse = await axios
    .get(`/post/`)
    .then(
      (response) => response,
    )
  return response
}
export const createPost = async (id: string, data: { postContent: string }) => {
  const response: AxiosResponse<{ postContent: string }> = await axios
    .post(`/post/${id}`, JSON.stringify(data))
    .then((response) => response)
  return response
}
export const getPostsById = async (id: string) => {
  const response: AxiosResponse = await axios
    .get(`/post/${id}`)
    .then(
      (response) => response,
    )
  return response
}