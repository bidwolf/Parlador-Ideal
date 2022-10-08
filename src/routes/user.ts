import 'express-session'

import cookieParser from 'cookie-parser'
import { Router } from 'express'
import session from 'express-session'

import createUserController from '../controllers/UserControllers/createUserController'
import { deleteUser } from '../controllers/UserControllers/deleteUserController'
import getUser from '../controllers/UserControllers/getUserController'
import { updateUser } from '../controllers/UserControllers/updateUserController'
import { UserLogin } from '../models/User'
declare module 'express-session' {
  interface SessionData {
    user: UserLogin
  }
}
const SECRET = process.env.SECRET || ''
const router = Router()
router.use(cookieParser(SECRET))
router.use(session({ secret: SECRET, saveUninitialized: false, resave: true }))
// USUÁRIOS REST API
router.post('/register', createUserController)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)
export default router
