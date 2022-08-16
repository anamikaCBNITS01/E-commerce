const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const userRoute = require('./api/route/user');
const cors=require("cors")

app.use(cors());



mongoose.connect('mongodb://localhost:27017/');

mongoose.connection.on('error',err=>{
    console.log('connection failed');
})

mongoose.connection.on('connected',connected=>{
console.log('connected with database successful')
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/user',userRoute);




app.use((req,res,next)=>{
    res.status(200).json(
        {
            message : 'app is running at localhost: 3000'
        }
    )
})



module.exports = app;