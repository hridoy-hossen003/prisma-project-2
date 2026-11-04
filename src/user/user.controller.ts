import { Request, Response } from "express"
import { userService } from "./user.service"
import httpStatus from "http-status"

const createUser = async (req : Request , res : Response) =>{
    try {
        const payload = req.body
 const result = await userService.createUserService(payload)
 
res.status(httpStatus.CREATED).json({
    success : true,
    statusCode : httpStatus.CREATED,
    message : "user created successfully",
    data : result
 })
    } catch (error : any) {
       res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success : false,
    statusCode : httpStatus.INTERNAL_SERVER_ERROR,
    message : error.message,
    data : null
 }) 
    }
    }

export const userConroller = {
    createUser
}