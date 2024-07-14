const todoController=require("../Controller/todoController")
const express=require("express")
const Router=express.Router()

Router.route("/").post(todoController.todo)
Router.route("/").get(todoController.getTodo)
Router.route("/:id").delete(todoController.deleteTodo)
Router.route("/:id").put(todoController.updatetodo)

module.exports=Router;