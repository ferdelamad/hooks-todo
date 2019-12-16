import React from 'react';
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
  const {
    todos,
    newTodo,
    handleToggleChange,
    handleDeleteChange,
    handleNewTodoSubmit,
    handleNewTodoChange
   } = useTodos();

  return(
    <TodosContainer>
      <NewTodo value={newTodo} onChange={handleNewTodoChange} onSubmit={handleNewTodoSubmit} />
      {!!todos.length && (
        <List>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChange={handleToggleChange}
              onDelete={handleDeleteChange}
            />
          ))}
        </List>
      )}
    </TodosContainer>
  )
}
