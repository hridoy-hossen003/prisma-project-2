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

    const loginUser = async  (req : Request , res : Response) =>{
        try {
            const userData = req.body
            const {accessToken , refreshToken } = await userService.loginUserDB(userData)
            res.cookie("accessToken" , accessToken , {
                httpOnly  : true,
                sameSite : "none" ,
                secure : false ,
                maxAge : 1000*60*60*24
            })

             res.cookie("refreshToken" , refreshToken , {
                httpOnly  : true,
                sameSite : "none" ,
                secure : false ,
                maxAge : 1000*60*60*24*7
            })

            return res.status(httpStatus.OK).json({
                success : true,
                statusCode : httpStatus.OK,
                message : "User logged in successfully" ,
                data : {
                    accessToken,
                    refreshToken
                }
            })

        } catch (error) {
            
        }
    }

export const userConroller = {
    createUser,
    loginUser
}


// https://js-masterclass.space-z.ai/