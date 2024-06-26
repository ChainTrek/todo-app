import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({ task, index, deleteTask, editTask }) => {
	const [isEditing, setIsEditing] = useState(false)
	const [editValue, setEditValue] = useState(task)

	const handleEdit = () => {
		setIsEditing(true)
	}

	const handleSave = () => {
		editTask(index, editValue)
		setIsEditing(false)
	}

	return (
		<li>
			{isEditing ? (
        <>
          <input type='text' value={editValue} onChange={e => setEditValue(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {task}
          <button onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => deleteTask(index)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      )}
		</li>
	)
}

export default TodoItem
