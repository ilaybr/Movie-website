const movieDB = require('./movieModel.js');
const subsModel = require('./subsModel.js');


// get all movies and search for user
function getBySearch(src)
{
    return new Promise((resolve,reject)=>
    {
       if (src != null)
       {
           movieDB.find({name:{$regex: src}} ,(err,data)=>
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
       }
        else 
        {
            {
                movieDB.find(({}) ,(err,data)=>
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

        }
       
    })
}

//get movie by ID
function getById(id)
{
    return new Promise((resolve,reject)=>
    {
        movieDB.findById(id,(err,data)=>
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

// add movie
function addMovie(obj)
{
    return new Promise((resolve,reject)=>
    {
        let newMovie =  new movieDB(obj)
        newMovie.save( async function(err, mov)
        {
            if(err)
            {
                reject(err);
            }
            else 
            {
                 resolve(mov);
            }
        })
    })
}

// update movie
function update(id, obj)
{
    return new Promise((resolve,reject)=>
    {
        movieDB.findByIdAndUpdate(id,obj,function(err)
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

//delete movie
function del(id)
{
    return new Promise((resolve,reject)=>
    {
        movieDB.findByIdAndDelete(id,function(err)
        {
            if(err)
            {
                reject(err);
            }
        })
        subsModel.findOneAndDelete({movie:id},function(err)
        {
            if(err)
            {
                reject(err);
            }
            else 
            {
                resolve("movie and it's subscriptions are deleted!");
            }
        })
    })
}



module.exports= { getById,addMovie, update, del,getBySearch}