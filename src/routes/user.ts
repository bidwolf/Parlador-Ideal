import 'express-session'

import cookieParser from 'cookie-parser'
import { Router } from 'express'
import session from 'express-session'

import getUser from '../controllers/UserController/getUserController'
import { ensureAuthenticated } from '../middlewares/EnsureAuthenticated'
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

router.use(ensureAuthenticated)
router.get('/:id', getUser)
export default router
