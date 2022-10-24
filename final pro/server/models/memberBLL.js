const memberDB = require('./memberModel.js');
const subsDB = require('./subsModel.js');
const express = require('express');

// get all memberes and search for member
function getBySearch(src)
{
    return new Promise((resolve,reject)=>
    {
       if (src != null)
       {
           memberDB.find({email:{$regex: src}} ,(err,data)=>
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
        else 
        {
            {
                memberDB.find(({}) ,(err,data)=>
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

//get member by ID
function getById(id)
{
    return new Promise((resolve,reject)=>
    {
        memberDB.findById(id,(err,data)=>
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

// add member
function addMember(obj)
{
    return new Promise((resolve,reject)=>
    {
        let newMember = new memberDB(obj);
        newMember.save(function(err,member)
        {
            if(err)
            {
                reject(err);
            }
            else 
            {
                resolve(member);
            }
        })
    })
}

// update member
function update(id, obj)
{
    return new Promise((resolve,reject)=>
    {
        memberDB.findByIdAndUpdate(id,obj,function(err)
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

//delete member
function del(id)
{
    return new Promise((resolve,reject)=>
    {
        memberDB.findByIdAndDelete(id,function(err)
        {
            if(err)
            {
                reject(err);
            }
        })
        subsDB.findOneAndDelete({member :id},function(err)
        {
            if(err)
            {
                reject(err);
            }
            else 
            {
                resolve("Subscription and Member deleted!");
            }
        })
    })
    
}



module.exports= { getById,addMember, update, del,getBySearch}