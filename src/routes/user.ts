import { Router } from "express";
import getUser from "../controllers/UserController/getUserController";
import {checkToken} from "../middlewares/checkToken";

const router = Router();
router.use(checkToken);
router.get('/:id',getUser);
export default router;