const express = require('express');
const router = express.Router();
const memberBLL = require('../models/memberBLL');


// get member
router.route('/')
.get(async function (req,resp)
{
    let src = req.query.search;
    let data = await memberBLL.getBySearch(src);
    return resp.json(data)
   
})

// get by id
router.route('/:id')
.get(async function (req,resp)
{
    let id = req.params.id;
    let data = await memberBLL.getById(id);
    return resp.json(data);

})


//Add 
router.route('/')
.post(async function (req,resp)
{
    let obj = req.body;
   let data =  await memberBLL.addMember(obj)
    return resp.json(data)

})

//Update
router.route('/:id')
.put(async function (req,resp)
{
    let id = req.params.id
    let obj = req.body;
    await memberBLL.update(id,obj);
    return resp.json("updated")
})

//Delete
router.route('/:id')
.delete(async function (req,resp)
{
    let id = req.params.id
    await memberBLL.del(id)
    return resp.json("Member and his Subscriptions Deleted")
})

module.exports = router;