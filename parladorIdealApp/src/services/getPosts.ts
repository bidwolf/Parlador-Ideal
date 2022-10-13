import axios, { AxiosResponse } from "axios"
const baseURL = 'http://192.168.1.14:3333/api/post/'
export const getPosts = async () => {
  const response: AxiosResponse = await axios
    .get(baseURL ,{
      headers: { 'Content-Type': 'application/json' ,
    },
    })
    .then(
      (response) => response,
    )
    return response
}