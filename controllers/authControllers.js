const authModel = require("../models/authModel");



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


    const user = await authModel.findOne({ email });

    console.log(user)

} catch (error) {
    console.log(error)
  
  
}


  }

}

module.exports = new authController();