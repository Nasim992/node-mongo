
const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.json());  //sent request to postman and get data

app.get('/fruits/banana',(req,res)=> {
   res.send({fruits:'mango',price:12});
})  //localhost:3000/fruits/banana

app.get('/',(req,res)=> {
    res.send("Thankyou for loading in port 3000wfwwf")
}) // localhost:3000


const users = ["nasim","iqbal","apple","potato","orange"];
app.get('/users/:id',(req,res)=> { // use dynamic data give id and get the name 
    const id = req.params.id;
    const name = users[id];
    res.send({id,name});
})


app.listen(3000,()=> {
    console.log("App port listening into 3000")
})


app.post('/adduser',(req,res)=> {
    // save to database 
    res.send(req.body)
})