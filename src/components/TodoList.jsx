import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ tasks, deleteTask, editTask }) => {
	return (
		<ul className='todo-list'>
			{tasks.map((task, index) => (
				<TodoItem key={index} task={task} deleteTask={deleteTask} editTask={editTask} index={index} />
			))}
		</ul>
	)
}

export default TodoList
