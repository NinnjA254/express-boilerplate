const mongoose = require('mongoose')

//declare your schemas and models here
const exampleSchema = new mongoose.Schema({
    username:"String",
    email:{type:String,unique:true},
    password:String
})

const exampleModel = mongoose.model('example',exampleSchema) 

//put all your models in this object, which will then be exported
const models = {
    exampleModel:exampleModel
}

module.exports = models
