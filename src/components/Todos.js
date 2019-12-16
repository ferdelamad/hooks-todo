import React, { useState, useRef, useReducer } from 'react';
import styled from 'styled-components';

import NewTodo from './NewTodo';
import TodoItem from './TodoItem';
import useTodos from '../hooks/useTodos';

const TodosContainer = styled.div`
  margin: 3em auto 0 auto;
  width: 75%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  input[type="text"] {
    border-radius: ${({ todos }) =>
      (todos && todos.length ) ? "0.25em 0.25em 0 0" : "0.25em"};
  }
`;

const List = styled.ul`
  list-style: none;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-top: none;
  margin: 0;
  padding-left: 0;
`;

export default function Todos() {
  const [newTodo, updateNewTodo] = useState('');
  const [todos, dispatch] = useTodos();

  const handleNewTodoChange = e => {
    updateNewTodo(e.target.value);
  }

  const handleNewTodoSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text: newTodo })
    updateNewTodo('');
  }

  const handleToggleChange = id =>
    dispatch({ type: 'TOGGLE_TODO', id });

  const handleDeleteTodo = id =>
    dispatch({ type: 'DELETE_TODO', id });

  return(
    <TodosContainer>
      <NewTodo value={newTodo} onChange={handleNewTodoChange} onSubmit={handleNewTodoSubmit} />
      {!!todos.length && (
        <List>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChange={() => handleToggleChange(todo.id)}
              onDelete={() => handleDeleteTodo(todo.id)}
            />
          ))}
        </List>
      )}
    </TodosContainer>
  )
}
