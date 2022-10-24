
const mongoose = require('mongoose');
const subsModel = require('./subsModel');
const movieSchema = new mongoose.Schema(
    {
       name : String,
       premiered : Date ,
       genre : [String],
       img : String,
    })

  

    module.exports = mongoose.model('movie' , movieSchema)