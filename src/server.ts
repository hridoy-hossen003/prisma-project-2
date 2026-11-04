import { CLIENT_RENEG_LIMIT } from "node:tls"
import app from "./app.js"
import config from "./config/index.js"

const port = config.port

app.listen(port , ()=>{
    console.log("server is running at port ", port)
})