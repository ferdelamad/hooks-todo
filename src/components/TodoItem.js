import React, { memo, useContext, useCallback } from "react";
import styled from 'styled-components';
import Checkbox from './Checkbox';
import { TodosDispatchContext } from './Todos';

const Button = styled.button`
  font-weight: 400;
  color: black;
  font-size: 0.75em;
  border: 1px solid transparent;
  background-color: transparent;
  margin: 5px;
  cursor: pointer;
`;

const Item = styled.li`
  font-size: 1.75em;
  padding: 0.25em 0.25em 0.25em 0.5em;
  color: black;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:last-of-type {
    border-bottom: none;
  }
`;

const areEqual = (prevProps, nextProps) => prevProps.todo === nextProps.todo;

export default memo(function TodoItem({ todo }) {
  console.log("I'm not updating all the time!", todo);

  const dispatch = useContext(TodosDispatchContext);

  const handleToggleChange = useCallback(
    id => dispatch({ type: 'TOGGLE_TODO', id })
  , []);

  const handleDeleteChange = useCallback(
    id => dispatch({ type: 'DELETE_TODO', id })
  , []);

  return (
    <Item key={todo.id}>
      <Checkbox
        id={todo.id}
        label={todo.text}
        checked={todo.completed}
        onChange={() => handleToggleChange(todo.id)}
      />
      <Button onClick={() => handleDeleteChange(todo.id)}>x</Button>
    </Item>
  );
}, areEqual);
