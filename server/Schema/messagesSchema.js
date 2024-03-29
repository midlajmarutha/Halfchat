const mongoose = require('mongoose')
const collections = require('../config/collection')
const messageSchema = new mongoose.Schema({
    Sender: {type:mongoose.Types.ObjectId,required:true,ref:'users'},
    Recipient: {type:mongoose.Types.ObjectId,required:true,ref:'users'},
    Message: {type:String},
    File:{
        file_name:{type:String},
        file_type:{type:String}
    }
},{timestamps:true})
const messageModel = mongoose.model(collections.MESSAGE_COLLECTION,messageSchema)
module.exports = messageModel;