const Task=require("../models/Task");



// CREATE

exports.createTask=async(req,res)=>{


const task=await Task.create({

title:req.body.title,

description:req.body.description,

user:req.user

});


res.json(task);

};




// GET TASKS + SEARCH + PAGINATION

exports.getTasks=async(req,res)=>{


const keyword=req.query.keyword || "";


const page=req.query.page || 1;

const limit=5;



const tasks=await Task.find({

user:req.user,

title:{
$regex:keyword,
$options:"i"
}

})

.skip((page-1)*limit)

.limit(limit);



res.json(tasks);


};




// UPDATE

exports.updateTask=async(req,res)=>{


const task=
await Task.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true
}

);


res.json(task);


};




// DELETE

exports.deleteTask=async(req,res)=>{


await Task.findByIdAndDelete(
req.params.id
);


res.json({
message:"Deleted"
});


};