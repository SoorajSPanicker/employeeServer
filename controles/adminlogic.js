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
    const profile = ""
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
                let newEmployee=new employees({
                    fname, lname, status, mobile, location, gender, email
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

module.exports = { adminLogin,addEmployee }

