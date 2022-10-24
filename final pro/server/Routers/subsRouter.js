const express = require('express');
const router = express.Router();
const subsBLL = require('../models/subsBLL');


   // get All
   router.route('/')
   .get(async function (req,resp)
   {
    if(req.query.member) 
    {
        let data = await subsBLL.GetByMemberID(req.query.member)
        return resp.json(data)
    }
    else if(req.query.movie)
    {
        let data = await subsBLL.getByMovieID(req.query.movie)
        return resp.json(data)
    }
    else{
        let  data = await subsBLL.getAll()  
        return resp.json(data)}
     })
   

    // get By ID
    router.route('/:id')
    .get(async function (req,resp)
    {
            let id = req.params.id
            let  data = await subsBLL.getById(id)  
            return resp.json(data)
    })



    //Add 
    router.route('/')
    .post(async function (req,resp)
    {
        let obj = req.body;
        let data =await subsBLL.addSubs(obj)
        return resp.json(data)

    })

    //Update
    router.route('/:id')
    .put(async function (req,resp)
    {
        let id = req.params.id
        let obj = req.body;
        let data  = await subsBLL.update(id,obj);
        return resp.json(data)
    })

    //Delete
    router.route('/:id')
    .delete(async function (req,resp)
    {
        let id = req.params.id
        await subsBLL.del(id)
        return resp.json("deleted")
    })

module.exports = router;