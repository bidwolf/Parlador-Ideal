import bcrypt from "bcrypt";
import { Request, Response } from "express";
import UserImp, { User, UserDTO } from "../models/User";
const emailValidate = (email: string) => {
  const isValidEmail = (email: string) => {
    const regexEmail = RegExp(/\S+@\S+\.\S+/);
    return regexEmail.test(email);
  }
  if (!email) {
    throw { "code": 422, "message": "user cannot be registered, you need to provide an email to register" };
  }
  if (!isValidEmail(email)) {
    throw { "code": 422, "message": "user cannot be registered, you need to provide an valid email" }
  }
}
const passwordValidate = (password: string, passwordConfirmation?: string) => {
  if (!password || password.length == 0) {
    throw { "code": 422,"message":"You need to provide an password."};
  }
  if (password.length < 8) {
    throw { "code": 422,"message":"Your password must be 8 characters or plus"};
  }
  if (password !== passwordConfirmation) {
    throw { "code": 422,"message":"You need to confirm your password."}
  }
}
const saveUser = async (user_registred: UserDTO, passwordHash: string) => {
  let { name, email } = user_registred;
  let user: UserDTO = { name, email, password: passwordHash };
  await UserImp.create(user);
}
export default {

  async create(req:Request,res:Response) {
    const user :User= req.body;
    try {
      emailValidate(user.email);
      passwordValidate(user.password, user.passwordConfirmation);
    } catch (error) {
      res.status(422).json(error);
      return;
    }
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(user.password, salt);
    const userExists = await UserImp.findOne({ email: user.email });
    if (userExists) {
      throw ("This email already exists, please, use another email");
    }
    try {
      await saveUser(user, passwordHash);
      res.status(200).json({
        message:"User registered"
      })
    } catch (error) {
      console.error(error);
      res.status(500).json(error)
    }
    //checo se ele existe, se não, tento cadastrar no banco
  },
  
}