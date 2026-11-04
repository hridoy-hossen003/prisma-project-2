
import { prisma } from "../lib/prisma";
import { userPayload } from "./user.interface";

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

const result = await prisma.user.create({
    data : {
   
        name ,
        email ,
        password ,
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

export const userService = {
    createUserService
}
