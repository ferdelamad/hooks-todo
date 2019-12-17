import React from 'react';

import TodosContainer from '../containers/TodosContainer';
import NewTodo from './NewTodo';
import TodosList from './TodosList';

export default function Todos() {
  return (
    <TodosContainer>
      <NewTodo />
      <TodosList />
    </TodosContainer>
  );
}
