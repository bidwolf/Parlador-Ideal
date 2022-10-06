import './services/mongooseService'

import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express from 'express'
import session from 'express-session'

import authRouter from './routes/auth'
import userRouter from './routes/user'
// Configurando variáveis de ambiente
dotenv.config()
const app = express()
const PORT = process.env.PORT
const SECRET = process.env.SECRET || ''
// Configurando Middlewares
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(cookieParser(SECRET))
app.use(session({ secret: SECRET, saveUninitialized: false, resave: true }))

// Rota de autenticação
app.use('/auth', authRouter)
app.use('/user', userRouter)
// Conexão com o banco de dados
app.listen(PORT, () => console.log(`servidor on na porta ${PORT}`))
