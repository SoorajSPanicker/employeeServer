const express=require('express')
const { adminLogin, addEmployee, getAllEmployees, getEmployee, removeEmployee, updateEmployee, filterEmployee } = require('../controles/adminlogic')
const upload = require('../middlewares/multerMiddleware')


const router=new express.Router()
router.post('/admin/login',adminLogin)
//add new employee
router.post('/admin/add-employee',upload.single('user_profile'),addEmployee)
// get all employees
router.get('/admin/get-all-employees',getAllEmployees)
//get employee
router.get('/admin/get-employee/:id',getEmployee)
//delete employee
router.delete('/admin/remove-employee/:id',removeEmployee)
//edit employee details
router.put('/admin/update-employee/:id',upload.single('user_profile'),updateEmployee)
// filter status
router.get('/admin/filter',filterEmployee)

module.exports=router
