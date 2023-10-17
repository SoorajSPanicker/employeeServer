const express=require('express')
const { adminLogin } = require('../controles/adminlogic')

const router=new express.Router()
router.post('/admin/login',adminLogin)



module.exports=router
