const express = require('express');
const router = express.Router();
const movieBLL = require('../models/movieBLL');
const {buildSchema} = require('graphql')
const { GraphQLScalarType , Kind } = require('graphql');
const app = express()
const memberBLL = require('../models/memberBLL');
const subsBLL = require('../models/subsBLL');
const {graphqlHTTP}=require('express-graphql')



let appSchema = buildSchema(`

type Query {
  getAllMovies : [Movie],
  getMovie(id : String) : Movie,
  searchMovie(search : String) : [Movie]

  getAllMembers : [member],
  getMember(id : String) : member,
  searchMember(search : String) : [member]

  getAllSubs : [subs],
  getSubs(id : String) : subs,
  subsByMember(search :String) : [subs],
  subsByMovie(search : String) : [subsMember]


   


},
type Mutation
{
  addMovie(obj : MovieInput) : [Movie],
  updateMovie(obj: MovieInput) : Movie,
  deleteMovie(id : String) : String

  addMember(obj : memberInput) : String,
  updateMember(obj: memberInput) : member,
  deleteMember(id : String) : String
  
  addSubs(obj : subsInput) : String,
   updateSubs(obj: subsInput) : subs,
   deleteSubs(id : String) : String
},

type subsMember
{
  _id : String,
  movie : String,
  member : [member]
  date : String,

}


type Movie
{
  _id : String,
  name : String,
  genre: [String],
  premiered : String,
  img : String

  
},

input MovieInput
{
    name : String,
    genre: [String],
    premiered : String,
    img: String
},

type subs
{
    _id : String,
    movie : String,
    member: String,
    date : String
},

input subsInput
{
    movie : String,
    member: String,
    date : String
},

type member
{
  _id : String,
  name : String,
  email: String,
  city : String 
},

input memberInput
{
    name : String,
    email: String,
    city : String
}



`)


const appRoot = 
{
   


}




module.exports = graphqlHTTP({schema: appSchema , rootValue : appRoot , graphiql:true})