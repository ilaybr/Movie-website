const express = require('express');
const router = express.Router();
const userBL = require('../models/usersBL');
const jwt = require('jsonwebtoken')
const dotnev = require('dotenv')
const crypt = require('bcryptjs')

// get user
router.route('/')
.post(async function (req,resp)
{
    let obj = req.body;
    let data = await userBL.getUser(obj);
    if(data){
        const id = data._id
        
        const accessToken  =jwt.sign(
            {id : id},
           process.env.SECRET_ACCESS_TOKEN
        )
        resp.json({name: data.name, accessToken})
    }
    else resp.json("unauthorised")   
})



module.exports = router;