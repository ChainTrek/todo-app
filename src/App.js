import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem('tasks')) || ['Make dinner', 'Do laundry', 'Study for test']
	)

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const addTask = task => {
		setTasks([...tasks, task])
	}

	const deleteTask = index => {
		setTasks(tasks.filter((task, i) => i !== index))
	}

	const editTask = (index, newTask) => {
		const updatedTasks = tasks.map((task, i) => (i === index ? newTask : task))
		setTasks(updatedTasks)
	}

	return (
		<>
			<Header title='Todo App' />
			<AddTodo addTask={addTask} />
			<TodoList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
			<Footer text='© 2024 Elijah W. Cravens' />
		</>
	)
}

export default App
