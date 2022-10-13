import axios, { AxiosError, AxiosResponse } from "axios"
import { Alert } from "react-native"
import { UserProps } from "../components/LoginForm"
interface DataUser {
  email: string
  password: string
  password_confirmation:string
  token: string
}
const baseURL = 'http://192.168.1.14:3333/api/user/register'
export const createUser = async (data: UserProps) => {
  console.log(data)
  const response: AxiosResponse<DataUser> | void = await axios
    .post(baseURL, JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
    .then(
      (response: AxiosResponse<DataUser>) => console.log(response.data.token),
      (err: AxiosError) =>
        Alert.alert(
          'Não foi possível cadastrar o usuário',
          err.code ,
          [
            {
              text: 'Ok',
              style: 'default',
            },
          ],
          {
            cancelable: true,
          }
        )
    )
    return response
}