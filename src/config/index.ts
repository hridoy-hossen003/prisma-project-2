import dotenv from "dotenv"
import path from "path"

dotenv.config({path : path.join(process.cwd() , ".env")})

export default{
    port : process.env.PORT ,
    DATABASE_URL : process.env.DATABASE_URL,
    PASSWORD_SOLT_ROUND : process.env.PASSWORD_SORT_ROUND,
    JWT_ACCESS_SECRET : process.env.JWT_ACCESS_SECRET,
    JWT_ACCESS_EXPIRES_IN : process.env.JWT_ACCESS_EXPIRES_IN,
    JWT_REFRESH_SECRET : process.env.JWT_REFRESH_SECRET,
    JWT_REFRESH_EXPIRES_IN : process.env.JWT_REFRESH_EXPIRES_IN,
    APP_URL : process.env.APP_URL
}