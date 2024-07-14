import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

function Todolist() {
    const[todos,setTodos]=useState([]);

    useEffect(()=>{
    let fetchData=async()=>{
    let response= await axios.get("http://localhost:1800/api/todo")
        setTodos(response.data)
    }
    fetchData()
    },[])
 
        const addTodo=async(text)=>{
            
 let response=await axios.post("http://localhost:1800/api/todo",{text})
           setTodos([...todos,response.data])
        }
        const updateTodo=async(_id,updateTodo)=>{
            let response=await axios.put(`http://localhost:1800/api/todo/${_id}`,updateTodo)
            setTodos(todos.map(todo => (todo._id ===_id ? response.data : todo)));
        }
        const deleteTodo=async(_id)=>{
       await axios.delete(`http://localhost:1800/api/todo/${_id}`);
          setTodos(todos.filter((todo)=>(todo._id!==_id)));
        }

  return (
    <div>
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo)=>(
             <TodoItem key={todo._id}
             todo={todo}
             updateTodo={updateTodo}
             deleteTodo={deleteTodo}
             />
        ))}
    </div>
  )
}

export default Todolist