import './services/mongooseService'

import dotenv from 'dotenv'
import express from 'express'

import postRouter from './routes/post'
import userRouter from './routes/user'
// Configurando variáveis de ambiente
dotenv.config()
const app = express()
const PORT = process.env.FRONT
// Configurando Middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

// Rota de usuários
app.use('/user', userRouter)
app.use('/posts', postRouter)
// Conexão com o banco de dados
app.listen(PORT, () => console.log(`servidor on na porta ${PORT}`))
