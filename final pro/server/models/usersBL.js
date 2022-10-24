const userDB = require('./userModel.js');



function getUser(obj)
{
    return new Promise((resolve,reject)=>
    {
        userDB.findOne(({username : obj.username ,pw: obj.pw}) ,(err,data)=>
            { 
                if(err)
                {
                    reject(err);
                }
                else 
                {
                    resolve(data)
                }   
            })


       })
}
        
    



module.exports= {getUser}