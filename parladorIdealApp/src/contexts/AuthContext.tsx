import React, { createContext, useEffect, useState } from 'react'
import { UserProps } from '../components/LoginForm'
import { AxiosResponse } from 'axios'
import * as auth from '../services/login'
import { DataUser } from '../services/login'
import AsyncStorage, {
  AsyncStorageStatic,
} from '@react-native-community/async-storage'
import { View } from 'react-native'
import { Loading } from '../components/Loading'
interface AuthContextData {
  signed: boolean
  user: object | null
  login(data: UserProps): Promise<void>
  logout(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@PIDAuth:user')
      const storagedToken = await AsyncStorage.getItem('@PIDAuth:token')
      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser))
      }
    }
    loadStorageData()
  }, [])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<object | null>(null)
  async function login(data: UserProps) {
    const response: void | AxiosResponse<DataUser> = await auth.login(data)
    if (response) {
      setUser(response.data)
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
    return( <Loading />)
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user: user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext
