import { userActiveStatus, userRole } from "../../prisma/generated/prisma/enums";

export interface userPayload {

    name : string
    email : string
    password : string
    activeStatus : userActiveStatus
    role : userRole,
    profileImage : string,
    bio : string
}