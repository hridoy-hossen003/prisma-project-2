import { CLIENT_RENEG_LIMIT } from "node:tls"
import app from "./app.js"
import config from "./config/index.js"
import { prisma } from "./lib/prisma.js"

const port = config.port

const main =async () =>{
    try {
await prisma.$connect()
        app.listen(port , ()=>{
    console.log("server is running at port ", port)
})
    } catch (error) {
        await prisma.$disconnect()
        process.exit(1)
    }
}

main()