import express from 'express';
import dotenv from "dotenv";
import "./services/mongooseService";
import router from './routes/auth';
// Configurando variáveis de ambiente
dotenv.config();
const app = express();
const { PORT} = process.env;
app.use(express.json());
// Rota de autenticação
app.use('/auth', router);
app.use(express.urlencoded({
  extended: true
}))
// Conexão com o banco de dados
  app.listen(PORT,()=> console.log(`servidor on na porta ${PORT}`));
