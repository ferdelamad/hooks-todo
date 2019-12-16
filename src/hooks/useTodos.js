import { useState, useRef, useReducer, useCallback } from 'react'

const initialTodos = [
  { id: 0, text: 'Open this app', completed: true },
  { id: 1, text: 'Check the code', completed: false }
];

export default function useTodos(state = initialTodos) {
  const todoId = useRef(initialTodos.length - 1);
  const [newTodo, updateNewTodo] = useState('');

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

  const handleToggleChange = useCallback(
    id => dispatch({ type: 'TOGGLE_TODO', id })
  , []);

  const handleDeleteChange = useCallback(
    id => dispatch({ type: 'DELETE_TODO', id })
  , []);

  const handleNewTodoChange = useCallback(
    e => updateNewTodo(e.target.value)
  , []);

  const handleNewTodoSubmit = e => {
      e.preventDefault();
      dispatch({ type: 'ADD_TODO', text: newTodo })
      updateNewTodo('');
  }

  return {
    todos,
    newTodo,
    handleToggleChange,
    handleDeleteChange,
    handleNewTodoSubmit,
    handleNewTodoChange
   };
}
