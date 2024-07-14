import React, { useState } from 'react'
import "./TodoForm.css"
function TodoForm({addTodo}) {
    const[text,setText]=useState("")
   const handleSubmit=(e)=>{
        e.preventDefault()
        addTodo(text)
        setText('')
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type='text'value={text} onChange={(e)=>setText(e.target.value)} placeholder='add a new todo'/>
        <button type='Submit'>Add</button>
        </form>
    </div>
  )
}

export default TodoForm