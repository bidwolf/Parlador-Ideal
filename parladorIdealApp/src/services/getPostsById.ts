import axios, { AxiosResponse } from "axios"
const baseURL = 'http://192.168.1.14:3333/api/post'
export const getPostsById = async (id: string) => {
  const response: AxiosResponse = await axios
    .get(`${baseURL}/${id}` ,{
      headers: { 'Content-Type': 'application/json' ,
    },
    })
    .then(
      (response) => response,
    )
    return response
}