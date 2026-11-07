import { Router } from "express";
import { userConroller } from "./user.controller";

const router = Router()
router.post("/Register",  userConroller.createUser)
router.post("/Login",  userConroller.loginUser)


export const userRouter = router