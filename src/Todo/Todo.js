import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, onToggleComplete, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
