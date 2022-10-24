
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
       name : String,
       username : String,
       pw : String
     
    })

    module.exports = mongoose.model('user' , userSchema)