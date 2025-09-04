import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    fullname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String
    },
    friends:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
},{timestamps:true});
export const User=mongoose.model('User',userSchema);
