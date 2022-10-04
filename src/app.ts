import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import router from './routes/auth';

dotenv.config();
const app = express()
app.use(express.json());
app.use('auth',router);
const { PORT, MONGODB_USER, MONGODB_PASSWORD } = process.env;
const uri = `mongodb+srv://${MONGODB_USER}:`
  + `${MONGODB_PASSWORD
    ? encodeURIComponent(MONGODB_PASSWORD)
    : MONGODB_PASSWORD}`
  + `@cluster0.4p6vxw7.mongodb.net/?retryWrites=true&w=majority`;
app.get('/', (req: Request, res: Response) => res.send('Hello World!'))
mongoose.connect(uri)
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))