const authModel = require("../models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



class authController {

  login = async (req, res) => {

const { email, password } = req.body;
if (!email){
    return res.status(400).json({ message: "Email is required" });
}
if (!password){
    return res.status(400).json({ message: "Password is required" });
}

try{


    const user = await authModel.findOne({ email }).select("+password")
    if (user) {
        const match = await bcrypt.compare(password, user.password)
  
if (match) {

    const object = {
        id: user._id,
        name: user.name,
        
        role: user.role,
        category: user.category
    }
    const token = jwt.sign(object, process.env.JWT_SECRET, { expiresIn: "1h" });


} else {
    return res.status(401).json({ message: "Invalid password" });
}
    } else {
        return res.status(404).json({ message: "User not found" });
    }

} catch (error) {
    console.log(error)
  
  
}


  }

}

module.exports = new authController();