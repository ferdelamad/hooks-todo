import React from 'react';
import styled from 'styled-components';

import { TodosDispatchContext, TodosStateContext } from '../context/TodosContext';
import useTodos from '../hooks/useTodos';

const Container = styled.div`
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

export default function TodosContainer({ children }) {
  const [todos, dispatch] = useTodos();

  return(
    <Container>
      <TodosStateContext.Provider value={todos}>
        <TodosDispatchContext.Provider value={dispatch}>
          { children }
        </TodosDispatchContext.Provider>
      </TodosStateContext.Provider>
    </Container>
  )
}
