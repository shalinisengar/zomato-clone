
const express = require('express');
const router = express.Router();
const User = require('../models/user');
router.use(express.urlencoded({ extended: true }));
router.use(express.json())
let jwt=    require('jsonwebtoken')

let bcrypt=  require('bcrypt')


 router.post('/login', async (req, res) => {
    let ldata = req.body
    
    let userData
    try {
        userData= await User.findOne({ email: ldata.email })
        console.log(userData,"eeee");
    }
    catch {
        console.log(err);
    }
    if (!userData) {
        res.send('user not found')
    }
    else {
        let validpassword = await bcrypt.compare(ldata.passWord, userData.passWord).catch((err) => {
            console.log(err, 'error');
        })
        console.log(validpassword);
        if (!validpassword) {
            res.send('invalid passWord')
        }
        else {
                let data = JSON.stringify(userData.email)
                 let tokan=   jwt.sign(data,'NVDSKJLNIULSVKVKSNVUIVNKD')

            res.send({tokan,userData,msg:"login succesfully"})
        }
    }
})


 module.exports = router