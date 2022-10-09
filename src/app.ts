import './services/mongooseService'

import dotenv from 'dotenv'
import express from 'express'

import authRouter from './routes/auth'
import postRouter from './routes/post'
import tokenRouter from './routes/token'
import userRouter from './routes/user'
// Configurando variáveis de ambiente
dotenv.config()
const app = express()
const PORT = process.env.PORT
// Configurando Middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/token', tokenRouter)
app.use('/api/post', postRouter)
// Conexão com o banco de dados
app.listen(PORT, () => console.log(`servidor on na porta ${PORT}`))
