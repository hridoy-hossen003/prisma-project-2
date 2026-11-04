import { Router } from "express";
import { userConroller } from "./user.controller";

const router = Router()
router.post("/",  userConroller.createUser)


export const userRouter = router