import { Schema, model } from "mongoose";
export interface User {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
}
export interface UserDTO{
  email:string;
  name:string;
  password:string;
}
const UserSchema = new Schema<UserDTO>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
})

const UserImp = model<UserDTO>('User', UserSchema);
export default UserImp;