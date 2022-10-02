import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <>
    <div className='container my-3 '>
        <h3 className=''>Pending Task</h3>
        {props.todos.length ===0? "No tasks to display" :
        props.todos.map((todo)=>{
            return <TodoItem todo = {todo} key = {todo.sno} onDelete = {props.onDelete} OnComplete = {props.OnComplete}/>
        })}      
        
 </div>
 </>
  )
}
