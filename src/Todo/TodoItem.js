import React from "react";
function TodoItem({ task, index, onToggleComplete, onDeleteTask}) {
    return (
        <li>
            <span
            style={{ textDecoration: task.completed ? 'line-through': 'none'}}
            onClick={()=> onToggleComplete(index)}
            >
            {task.text}
            </span>
            <button onClick={()=>onDeleteTask(index)}>Delete</button>
        </li>
    )
}

export default TodoItem;