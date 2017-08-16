import React from 'react';

export default (props) => {
  const {todos} = props
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" defaultChecked={todo.isComplete}/>
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
