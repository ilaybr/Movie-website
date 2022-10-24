const subsDB = require('./subsModel');

//get all

function getAll()
{
    
    return new Promise((resolve,reject)=>
     {
           subsDB.find({},(err,data)=>
            {
                if(err)
                {
                    reject(err);
                }
                else 
                {
                    resolve(data);
                }
            })
        }
    )

}
// search sub By Member 
function GetByMemberID(src)
{
    return new Promise((resolve,reject)=>
    {
       if (src != "")
       {
           subsDB.find({member: src},(err,data)=>
            {
                if(err)
                {
                    
                    reject(err);
                }
                else 
                {
                    
                    resolve(data);
                }
            }).populate('movie')
       }
       else resolve("Search is Not Valid")
       
    })
}
// search Sub by Movie 
function getByMovieID(src)
{
    return new Promise((resolve,reject)=>
    {
       if (src !=null)
       {
           subsDB.find({movie:src},(err,data)=>
            {
                if(err)
                {
                    reject(err);
                }
                else 
                {
                    resolve(data)
                }
            }).populate('member')
       }
        
    })
}

//get subs by ID
function getById(id)
{
    return new Promise((resolve,reject)=>
    {
        subsDB.findById(id,(err,data)=>
        {
            if(err)
            {
                reject(err);
            }
            else 
            {
                resolve(data);
            }
        })
    })
}

// add subs
function addSubs(obj)
{
    return new Promise((resolve,reject)=>
    {
        let newsubs =  subsDB.create(obj,function(err)
        {
            if(err)
            {
                reject(err);
            }
            else 
            {
                resolve(newsubs);
            }
        })
    })
}

// update subs
function update(id, obj)
{
    return new Promise((resolve,reject)=>
    {
        subsDB.findByIdAndUpdate(id,obj,function(err)
        {
            if(err)
            {
                reject(err);
            }
            else 
            {
                resolve("updated!");
            }
        })
    })
}

//delete subs
function del(id)
{
    return new Promise((resolve,reject)=>
    {
        subsDB.findByIdAndDelete(id,function(err)
        {
            if(err)
            {
                reject(err);
            }
            else 
            {
                resolve("deleted!");
            }
        })
    })
}



module.exports= { getById,addSubs, update, del,getByMovieID,GetByMemberID, getAll}