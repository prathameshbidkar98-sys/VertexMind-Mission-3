const User=require("../models/User");
const bcrypt=require("bcryptjs");
const generateToken=require("../utils/generateToken");


// REGISTER

exports.register=async(req,res)=>{


const {name,email,password}=req.body;


const exists=await User.findOne({email});


if(exists){
return res.json({
message:"User already exists"
});
}



const hashedPassword=
await bcrypt.hash(password,10);



const user=await User.create({

name,

email,

password:hashedPassword

});



res.json({

message:"Registered successfully",

user

});


};



// LOGIN

exports.login=async(req,res)=>{


const {email,password}=req.body;



const user=await User.findOne({email});


if(!user){

return res.status(404).json({
message:"User not found"
});

}



const match=
await bcrypt.compare(
password,
user.password
);



if(!match){

return res.json({
message:"Wrong password"
});

}   

const token = generateToken(user._id);

res.json({

token

});


};
