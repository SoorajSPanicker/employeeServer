const admins = require("../models/adminModel");

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
module.exports={adminLogin}

