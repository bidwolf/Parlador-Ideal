import axios, { AxiosError, AxiosResponse } from "axios"
import { Alert } from "react-native"
import { UserProps } from "../components/LoginForm"
export interface DataUser {
  token: string
  user: {
    id: string
    email: string
    token: string
  }
}
const baseURL = 'http://192.168.1.14:3333/api/auth/login'
export const login = async (data: UserProps) => {
  console.log(data)
  const response: AxiosResponse<DataUser> | void = await axios
    .post(baseURL, JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
    .then(
      (response: AxiosResponse<DataUser>) =>response,
      (err: AxiosError) =>
        Alert.alert(
          'Não foi possível efetuar o login',
          err.code == 'ERR_BAD_REQUEST'
            ? 'Usuário ou senha inválidos'
            : err.code,
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