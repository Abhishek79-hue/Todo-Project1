const Todo=require("../Model/todoModel")

const todo=async(req,res)=>{
    try {
        const todo=new Todo({
            text:req.body.text,
        })
        await todo.save()
        return res.status(200).json(todo)
    } catch (error) {
        console.log("error")
    }
}
const getTodo=async(req,res)=>{
    try {
        const todo=await Todo.find()
        return res.status(200).json(todo)
    } catch (error) {
     console.log("error")   
    }
}
const deleteTodo=async(req,res)=>{
    try {
        const userId=req.params.id
        await Todo.findByIdAndDelete({_id:userId})
        return res.status(200).json({message:"todo Sucessfully deleted"})
    } catch (error) {
        
    }
}
const updatetodo=async(req,res)=>{
    try {
        const userId=req.params.id
        const todo=await Todo.findByIdAndUpdate({_id:userId},req.body,{new:true})
        return res.status(200).json(todo)
    } catch (error) {
     console.log("error")   
    }
}
module.exports={todo,getTodo,deleteTodo,updatetodo}