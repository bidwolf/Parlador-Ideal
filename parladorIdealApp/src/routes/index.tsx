import { AppRoutes } from './app.routes'
import AuthContext from '../contexts/AuthContext'
import { useContext } from 'react'
import { AuthRoutes } from './auth.routes'
export function Routes() {
  const {signed}=useContext(AuthContext)
  return (
        signed?<AppRoutes />:<AuthRoutes/>
  )
}
