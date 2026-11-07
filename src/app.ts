import express ,  { Request, Response, type Application } from "express";
import { userRouter } from "./user/router";
import { userConroller } from "./user/user.controller";
import cookieParser from "cookie-parser";
import cors from "cors";
import config from "./config";

const app : Application = express()
app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
origin :config.APP_URL,
credentials: true
    })
)

app.get("/" ,(req : Request , res : Response) =>{
    res.send('Hello World!');
} )

app.use("/api/user" , userConroller.createUser)

export default app