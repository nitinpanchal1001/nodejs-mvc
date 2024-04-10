const User = require("../models/user")
module.exports = getAllUsers = async (req, res) => {
    const users = await User.find({})
    res.status(201).cookie("tempi" , "lol").json({
        success : true ,
        users,
    })
}
module.exports = register =  async (req, res) => {
    const {name , email , Password} = req.body;
        await User.create({
        name, 
        email,
        Password,
    })
    res.json({
        success : true,
        message : "Registered Successfully"
    })
}
module.exports = specialFunc =  (req , res) => {
    res.json({
        success : true , 
        message : "just Joking"
    })
}
module.exports = getUserDetails = async (req , res) => {
    const {id} = req.params ;
    const user = await User.findById(id)

    res.json({
        success : true , 
        user , 
    })
}
module.exports = updateUser = async (req , res) => {
    const {id} = req.params ;
    const user = await User.findById(id)

    res.json({
        success : true , 
        message : "Update successfully"
    })
}
module.exports = deleteUser = async (req , res) => {
    const {id} = req.params ;
    const user = await User.findById(id)
    res.json({
        success : true , 
        message : "Deleted Successfully"
    })
}