import bcrypt from "bcrypt";
import { Request, Response } from "express";
import UserImp, { User, UserDTO } from "../models/User";
const emailValidate = (email: string) => {
  const isValidEmail = (email: string) => {
    const regexEmail = RegExp(/\S+@\S+\.\S+/);
    return regexEmail.test(email);
  }
  if (!email) {
    throw { "code": 422, "message": "user cannot be registered, you need to provide an email to register." };
  }
  if (!isValidEmail(email)) {
    throw { "code": 422, "message": "user cannot be registered, you need to provide an valid email." }
  }
}
const passwordValidate = (password: string, passwordConfirmation?: string) => {
  if (!password || password.length == 0) {
    throw { "code": 422, "message": "You need to provide an password." };
  }
  if (password.length < 8) {
    throw { "code": 422, "message": "Your password must be 8 characters or more." };
  }
  if (password !== passwordConfirmation) {
    throw { "code": 422, "message": "You need to confirm your password." }
  }
}
const nameValidate = (name: string) => {
  //implementar parser de string sanitizeName(name:string):string
  if (!name || name == "") {
    throw { "code": 422, "message": "You must enter a name in the register." };
  }
}
const saveUser = async (user: UserDTO, passwordHash: string) => {
  let { name, email } = user;
  let encryptedUser: UserDTO = { name, email, password: passwordHash };
  await UserImp.create(encryptedUser);
}
export default {

  async create(req: Request, res: Response) :Promise<Response>{
    const user: User = req.body;
    // Validação dos dados
    try {
      emailValidate(user.email);
      passwordValidate(user.password, user.passwordConfirmation);
      nameValidate(user.name);
    } catch (error) {
      return res.status(422).json(error);
    }
    // Criptografia da senha
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(user.password, salt);
    const userExists = await UserImp.findOne({ email: user.email });
    // Cadastro do usuário
    try {
      if (userExists) {
        throw {"code":422,"message":"This email already exists, please, use another email"};
      }
      await saveUser(user, passwordHash);
    } catch (error) {
      return res.status(500).json(error);
    }
    return res.status(200).json({
      message: "User registered"
    });
  },

}