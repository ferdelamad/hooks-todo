import React, { useContext } from 'react';
import styled from 'styled-components';

import { TodosStateContext } from './Todos';
import TodoItem from './TodoItem';

const List = styled.ul`
  list-style: none;
  border: 2px solid lightgrey;
  border-top: none;
  margin: 0;
  padding-left: 0;
`;

export default function TodosList() {
  const todos = useContext(TodosStateContext);

  return (
    <>
      {!!todos.length && (
        <List>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </List>
      )}
    </>
  )
}
