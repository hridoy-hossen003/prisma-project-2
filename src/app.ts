import express ,  { Request, Response, type Application } from "express";
import { userRouter } from "./user/router";
import { userConroller } from "./user/user.controller";


const app : Application = express()
app.use(express.json())
app.get("/" ,(req : Request , res : Response) =>{
    res.send('Hello World!');
} )

app.use("/api/user" , userConroller.createUser)

export default app