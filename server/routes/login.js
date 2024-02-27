
const express = require('express');
const router = express.Router();
const User = require('../models/user');
router.use(express.urlencoded({ extended: true }));
router.use(express.json())
let jwt=    require('jsonwebtoken')

let bcrypt=  require('bcrypt')


 router.post('/login', async (req, res) => {
    let ldata = req.body
    
    let user1
    try {
        user1 = await User.findOne({ email: ldata.email })
    }
    catch {
        console.log(err);
    }
    if (!user1) {
        res.send('user not found')
    }
    else {
        let validpassword = await bcrypt.compare(ldata.passWord, user1.passWord).catch((err) => {
            console.log(err, 'error');
        })
        console.log(validpassword);
        if (!validpassword) {
            res.send('invalid passWord')
        }
        else {
                let data = JSON.stringify(user1.email)
                 let tokan=   jwt.sign(data,'NVDSKJLNIULSVKVKSNVUIVNKD')

            res.send({tokan,user1})
        }
    }
})


 module.exports = router