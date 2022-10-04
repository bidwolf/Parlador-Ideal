import { Router } from "express";
import UserImp, { User } from "../models/User";
const router = Router();
// create user
const isValidEmail = (email: string) => {
  const regexEmail = RegExp(/\S+@\S+\.\S+/);
  return regexEmail.test(email);
}
router.post('/auth/register ', async (req, res) => {
  try {
    const UserActual: User = req.body;

    if (!UserActual.password) {
      res.status(422).json(
        {
          "code": 422,
          "message": "user cannot be registered, you need to provide an valid password"
        }
      )
    } else if (UserActual.password !== UserActual.passwordConfirmation) {
      res.status(422).json(
        {
          "code": 422,
          "message": "user cannot be registered, passwords must be the same"
        }
      )
      return;
    }
    if (!UserActual.email) {
      res.status(422).json(
        {
          "code": 422,
          "message": "user cannot be registered, you need to provide an email to register"
        }
      )
    } else if (!isValidEmail(UserActual.email)) {
      res.status(422).json(
        {
          "code": 422,
          "message": "user cannot be registered, you need to provide an valid email"
        }
      )
    }

    await UserImp.create(UserActual);
    res.status(201);
    res.json({
      "code": 201,
      "message": "User was registered",
    })
  } catch (error) {
    res.status(500);
    res.json({
      "code": 500,
      "message": error
    });
  }
})
export default router;