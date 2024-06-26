import React, { useState } from 'react'

const AddTodo = ({ addTask }) => {
	const [task, setTask] = useState('')

	const handleAddTask = () => {
		if (task.trim()) {
			addTask(task.trim())
			setTask('')
		}
	}

	return (
		<div>
			<input type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder='Add Todo' />
			<button onClick={handleAddTask}>Add Todo</button>
		</div>
	)
}

export default AddTodo
