
const mongoose = require('mongoose');



const subSchema = new mongoose.Schema(
    {
       movie : {
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'movie' },
       member : {
         type:mongoose.Schema.Types.ObjectId, 
         ref: 'member' },
       date : Date
    })

   

    module.exports = mongoose.model('sub' , subSchema)