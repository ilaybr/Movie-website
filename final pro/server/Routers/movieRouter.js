const express = require('express');
const router = express.Router();
const movieBLL = require('../models/movieBLL');




// get movie
router.route('/')
.get(async function (req,resp)
{
    let src = req.query.name;
    let data = await movieBLL.getBySearch(src);
    
    return resp.json(data)
   
})

// get by id
router.route('/:id')
.get(async function (req,resp)
{
    let id = req.params.id;
    let data = await movieBLL.getById(id);
    return resp.json(data);

})


//Add 
router.route('/')
.post(async function (req,resp)
{
    let obj = req.body;
     data =await movieBLL.addMovie(obj)
    return resp.json(data)    

})

//Update
router.route('/:id')
.put(async function (req,resp)
{
    let id = req.params.id
    console.log(id)
    let obj = req.body;
    console.log(obj)
    await movieBLL.update(id,obj);
    return resp.json("updated")
})

//Delete
router.route('/:id')
.delete(async function (req,resp)
{
    let id = req.params.id
    await movieBLL.del(id)
    return resp.json("deleted")
})

module.exports = router;