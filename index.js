require('dotenv').config()
//server
const express=require('express')
const cors=require('cors')
const router=require('./Routers/routes')
const server=express()
server.use(cors())
server.use(express.json())
server.use(router)
require('./connections/connection')

//export uploads folder to client 
server.use('/uploads',express.static('./uploads'))
//         pathName   method           sending folder

const port=4000 || process.env.port 
server.listen(port,()=>{
    console.log(`________EMS Server Started At Port ${port}______`);
})
