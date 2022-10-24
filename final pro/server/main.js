const express = require('express');
const app = express();
const login = require('./Routers/userRouter');
const movie = require('./Routers/movieRouter');
const subs = require('./Routers/subsRouter');
const member = require('./Routers/memberRouter');
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken')
const appScema = require('./services/appScema');

const cors = require('cors');
const { JsonWebTokenError } = require('jsonwebtoken');
app.use(cors())
app.use(express.json());
require('./configs/DB')
app.use('/api/login',login);
app.use('/api/movie',movie);
app.use('/api/subs',subs);
app.use('/api/member',member);
app.use('/api/graphql',appScema);



const url ='http://localhost:8000/api'

app.listen(8000, ()=> console.log(`server running at ${url}/`));




function verifyUserOption(req,resp,next){
    const accesstoken =req.headers.accesstoken
    if(accesstoken==undefined) return resp.status(401)
    jwt.verify(accesstoken , process.env.SECRET_ACCESS_TOKEN,(err, data)=>{
    if(err) return resp.status(err)
    else next()

})

}