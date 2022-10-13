import axios, { AxiosResponse } from "axios"

const baseURL = 'http://192.168.1.14:3333/api/post'

export const createPost = async (id: string, data: { postContent: string }) => {
  const response: AxiosResponse<{ postContent: string }> = await axios
  .post(`${baseURL}/${id}`, JSON.stringify(data),
   { headers: { 'Content-Type': 'application/json' }, })
   .then((response)=>response)
   return response
}