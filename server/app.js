const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const mongoose =  require('mongoose')
const schema =require('./schema/schema')
const cors= require("cors")

const app = express();
// allow cross origin request 
app.use(cors())

// mongoose db connection 
mongoose.connect('mongodb+srv://arabian:f123456789@cluster0.hozny.mongodb.net/NetNinja?retryWrites=true')
mongoose.connection.once('open', () => {
    console.log('db complete')
})



app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

// app.get('/', (req, res) => {
//     res.send("its working")
// })



app.listen(4000, () => {
    console.log("server is listening to port 4000")
})