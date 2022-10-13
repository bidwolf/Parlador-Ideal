import React, { createContext, useEffect, useState } from 'react'
import { UserProps } from '../components/LoginForm'
import { AxiosResponse } from 'axios'
import * as auth from '../services/auth'
import { DataUser } from '../services/auth'
import AsyncStorage from '@react-native-community/async-storage'
import { Loading } from '../components/Loading'
import {api} from  '../services/api'
interface AuthContextData {
  signed: boolean
  user: object | null
  login(data: UserProps): Promise<void>
  logout(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<object | null>(null)
  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@PIDAuth:user')
      const storagedToken = await AsyncStorage.getItem('@PIDAuth:token')
      if (storagedUser && storagedToken) {
        api.defaults.headers['authorization'] = `Bearer${storagedToken}`
        setUser(JSON.parse(storagedUser))
      }
    }
    loadStorageData()
  }, [])
  async function login(data: UserProps) {
    const response: void | AxiosResponse<DataUser> = await auth.login(data)
    if (response) {
      setUser(response.data)
      api.defaults.headers['authorization'] = `Bearer${response.data.token}`
      await AsyncStorage.setItem(
        '@PIDAuth:user',
        JSON.stringify(response.data.user)
      )
      await AsyncStorage.setItem('@PIDAuth:token', response.data.token)
    }
  }
  async function logout() {
    AsyncStorage.clear().then(() => {
      setUser(null)
    })
    setUser(null)
  }

  if (loading) {
    return <Loading />
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user: user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext
