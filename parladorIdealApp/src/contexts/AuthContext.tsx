import React, { createContext, useState } from 'react'
import { UserProps } from '../components/LoginForm'
import { AxiosResponse } from 'axios'
import * as auth from '../services/login'
import { DataUser } from '../services/login'
interface AuthContextData {
  signed: boolean
  user: object|null
  login(data: UserProps): Promise<void>
  logout():void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<object | null>(null)
  async function login(data: UserProps) {
    const response: void | AxiosResponse<DataUser> = await auth.login(data)
    if (response) {
      setUser(response.data)
    }
  }
  async function logout (){
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user: user, login ,logout}}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext
