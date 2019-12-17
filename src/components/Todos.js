import React, { createContext } from 'react';
import styled from 'styled-components';

import useTodos from '../hooks/useTodos';
import NewTodo from './NewTodo';
import TodosList from './TodosList';

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

export const TodosStateContext = createContext();
export const TodosDispatchContext = createContext();

export default function Todos() {
  const [todos, dispatch] = useTodos();

  return(
    <TodosStateContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        <TodosContainer>
          <NewTodo />
          <TodosList />
        </TodosContainer>
      </TodosDispatchContext.Provider>
    </TodosStateContext.Provider>
  )
}
