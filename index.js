const express = require('express')
const session = require('express-session')
const mongodb = require('mongodb')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use((req,res) =>{
    res.json("Hello world")
})
app.listen(3000,()=>{
    console.log("app is listening on port 3000")
})