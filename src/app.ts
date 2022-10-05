import './services/mongooseService'

import dotenv from 'dotenv'
import express from 'express'

import authRouter from './routes/auth'
import userRouter from './routes/user'
// Configurando variáveis de ambiente
dotenv.config()
const app = express()
const { PORT } = process.env
// Configurando Middlewares
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
// Rota de autenticação
app.use('/auth', authRouter)
app.use('/user', userRouter)
// Conexão com o banco de dados
app.listen(PORT, () => console.log(`servidor on na porta ${PORT}`))
