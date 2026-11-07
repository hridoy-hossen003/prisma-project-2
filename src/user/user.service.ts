
import config from "../config";
import { prisma } from "../lib/prisma";
import { userPayload } from "./user.interface";
import bcrypt from "bcryptjs";
import jwt, { SignOptions } from "jsonwebtoken"

const createUserService = async (payload : userPayload) =>{
const {  name , email , password , activeStatus , role , bio , profileImage} = payload

const existingUser = await prisma.user.findUnique({
    where : {
        email
}
})


if(existingUser){
    throw new Error("User already exists")
}
const hashedPassword = await bcrypt.hash(password , Number(config.PASSWORD_SOLT_ROUND))

const result = await prisma.user.create({
    data : {
   
        name ,
        email ,
        password : hashedPassword ,
        activeStatus , 
        role,
        profile :{
create :{
    profileImage,
    bio
}
        },
        
    },
    omit :{
            password : true 
        },
        include :{
            profile :true
        }
})


return result
}

const loginUserDB = async (payload : {email : string , password : string})=>{
    const  {email , password } = payload
const existUser = await prisma.user.findUnique({
    where : {
    email
    }
})


if(!existUser){
throw new Error("User is not exsits Please login first")
}

if(existUser.activeStatus === "Blocked"){
    throw new Error("User is blocked please contect for support")
}

const compirePassword = await bcrypt.compare(password , existUser.password)

if(!compirePassword){
    throw new Error("Password is incorrect !")
}

const Userpayload = {
  id: existUser.id,
  name: existUser.name,
  email: existUser.email,
  role : existUser.role
};

const accessToken = jwt.sign(Userpayload , config.JWT_ACCESS_SECRET as string , {
    expiresIn : config.JWT_ACCESS_EXPIRES_IN
} as SignOptions)

const refreshToken = jwt.sign(Userpayload , config.JWT_REFRESH_SECRET as string , {
    expiresIn : config.JWT_REFRESH_EXPIRES_IN
} as SignOptions)

return {
    accessToken ,
    refreshToken
}

}

export const userService = {
    createUserService, 
    loginUserDB
}
