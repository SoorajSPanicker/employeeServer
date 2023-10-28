const express=require('express')
const { adminLogin, addEmployee } = require('../controles/adminlogic')
const upload = require('../middlewares/multerMiddleware')

const router=new express.Router()
router.post('/admin/login',adminLogin)
//add new employee
router.post('admin/add-employee',upload.single('user_profile'),addEmployee)


module.exports=router
