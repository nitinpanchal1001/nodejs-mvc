const express = require("express")
const router = express.Router()
const getAllUsers = require("../controllers/user.js")
const register = require ("../controllers/user.js")
const getUserDetails = require("../controllers/user.js")
const updateUser = require("../controllers/user.js")

router.get("/all" , getAllUsers)

router.get("/userid/special" ,specialFunc)

router.post("/new", register)

router.get('/userid/:id' , getUserDetails)

router.put('/userid/:id' , updateUser)

router.delete('/userid/:id' , deleteUser)

module.exports= router;