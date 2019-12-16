import { useRef, useReducer } from 'react'

const initialTodos = [
  { id: 0, text: 'Open this app', completed: true },
  { id: 1, text: 'Check the code', completed: false }
];

export default (state = initialTodos) => {
  const todoId = useRef(2);
  const [todos, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        todoId.current += 1;
        return [
          ...state,
          {
            text: action.text,
            completed: false,
            id: todoId.current
          }
        ];
      case 'DELETE_TODO':
        return state.filter(todo => todo.id !== action.id);
      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.id ? {...todo, completed: !todo.completed} : todo
        );
      default:
        return state;
    }
  }, state);

  return [todos, dispatch];
}
