import { Schema, model } from "mongoose";
export interface User {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
}
const UserSchema = new Schema<User>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  passwordConfirmation: { type: String, required: true },
})

const UserImp = model<User>('User', UserSchema);
export default UserImp;