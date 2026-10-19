const mongoose= require("mongoose")
const validator= require("validator")

const UserSchema= new mongoose.Schema({
    firstName:{
        type: String,
        minLength: 2,
        maxLength: 20,
        trim: true,
        required: true,
        immutable: true,

    },
    lastName:{
        type: String,
        minLength: 3,
        maxLength: 20,
        trim: true,
        required: true,
        immutable: true,
    },
    email:{
        required:true,
        type:String,
        validate:
        [
            (data)=>{
                return validator.isEmail(data)
            },
            "{VALUE} is not a valid email "
        ],
        maxLength: 60,
        immutable:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    username:{
        maxLength: 12,
        immutable:true,
        unique:true,
        trim:true,
        lowercase:true,
        type:String,
        minLength:4,
        required:true,
    },
    password:{
        type:String,
         required:true,
         trim:true
    },
    gender:{
        type:String,
         required:true,
         enum:{
            values:["male", "female", "others"],
            message:"{VALUE} is not a valid gender"
         },
    },
    blogs:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Blog"
        }
    ],

})

const User= mongoose.model("User", UserSchema)


module.exports={
    User
}