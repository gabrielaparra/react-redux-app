const initState = {
  todos: [
    {id: 1, name: 'Render static UI', isComplete: true},
    {id: 2, name: 'Create initial state', isComplete: true},
    {id: 3, name: 'Render based on state', isComplete: true},
    {id: 4, name: 'Create a store', isComplete: true},
    {id: 5, name: 'Load state through store', isComplete: true},
    {id: 6, name: 'Handle state changes with Redux', isComplete: false},
  ],
  currentTodo: 'temp'
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {...state, todos: state.todos.concat(action)};
    case 'CURRENT_UPDATE':
      return {...state, currentTodo: action.payload}
    default:
      return state
  }
}
