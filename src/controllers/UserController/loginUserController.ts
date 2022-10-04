//import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import UserImp, { UserLogin } from "../../models/User";
export default async function login(req: Request, res: Response): Promise<Response> {
  const authUser: UserLogin = req.body;
  const user = await UserImp.findOne({ email: authUser.email })
  try {
    if(!user){
      throw{code : 422, message : "User or Password invalid!"}
    }
  } catch (error) {
    return res.status(422).json(error);
  }
  return res.status(200);
}