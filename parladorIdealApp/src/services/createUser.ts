import axios, { AxiosResponse } from "axios"
import { FormUserData } from "../components/SignUpForm"

const baseURL = 'http://192.168.1.14:3333/api/user/register'
export const createUser = async (data: FormUserData) => {
  const response: AxiosResponse<{ code: string, message: string}>= await axios
    .post(baseURL, JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    }).then((response)=>response)
  return response
}