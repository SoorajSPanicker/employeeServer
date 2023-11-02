const admins = require("../models/adminModel");
const employees = require("../models/employeeCollection");

const adminLogin = async (req, res) => {
    const { email, psw } = req.body
    if (!email || !psw) {
        res.status(400).json("all datas are required")
    }
    else {
        try {
            const admin = await admins.findOne({ email, psw })
            if (admin) {
                res.status(200).json("login success")

            }
            else {
                res.status(404).json("incorrect email or password")
            }
        }
        catch {
            res.status(400).json("connection error")
        }

    }
}

const addEmployee = async (req, res) => {
    const profile = req.file.filename

    console.log(profile);

    const { fname, lname, status, mobile, location, gender, email } = req.body
    if (!fname || !lname || !status || !mobile || !location || !gender || !email || !profile) {
        res.status(404).json("all datas are required")

    }
    else {
        try {
            let preEmployee = await employees.findOne({ email })
            if (preEmployee) {
                res.status(400).json("employee is already present")
            }
            else {
                let newEmployee = new employees({
                    fname, lname, status, mobile, location, gender, email, profile
                })
                await newEmployee.save()
                res.status(200).json(fname)


            }
        }
        catch {
            res.status(400).json("connection error")

        }
    }
}
const getAllEmployees = async (req, res) => {
    //access query param from api
    const searchKey = req.query.search

    //regular expression query
    const query = {
        fname: { $regex: searchKey, $options: 'i' }
    }

    try {
        const result = await employees.find(query)
        res.status(200).json(result)
    }
    catch {
        res.status(400).json("connection error")
    }
}

const getEmployee = async (req, res) => {
    const { id } = req.params
    try {
        const emp = await employees.findOne({ _id: id })
        if (emp) {
            res.status(200).json(emp)
        }
        else {
            res.status(404).json("connection error")
        }
    }
    catch {
        res.status(400).json("connection error")

    }
}

const removeEmployee = async (req, res) => {
    const { id } = req.params
    try {

        const deletedData = await employees.findByIdAndDelete({ _id: id })
        if (deletedData) {
            res.status(200).json(deletedData.fname)
        }
        else {
            res.status(404).json("employee not found")
        }

    }
    catch {
        res.status(400).json("connection error")
    }
}

const updateEmployee = async (req, res) => {
    //id
    const { id } = req.params
    //body
    const { fname, lname, status, mobile, location, gender, email,user_profile } = req.body
    const profile =req.file? req.file.filename:user_profile
    try {
        employee = await employees.findOne({ _id: id })
        if (employee) {
            employee.fname = fname
            employee.lname = lname
            employee.status = status
            employee.mobile = mobile
            employee.location = location
            employee.gender = gender
            employee.email = email
            employee.profile = profile
            await employee.save()
            res.status(200).json(employee)


        }
        else {
            res.status(404).json("employee not found")
        }
    }
    catch {
        res.status(400).json("connection error")
    }
}

const filterEmployee=async(req,res)=>{
    const {filterData} = req.query  //active/inactive
    const femployees=await employees.find({status:filterData})
    res.status(200).json(femployees)
}

module.exports = { adminLogin, addEmployee, getAllEmployees, getEmployee, removeEmployee, updateEmployee, filterEmployee }

