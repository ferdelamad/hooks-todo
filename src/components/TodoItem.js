import React, { memo } from "react";
import styled from 'styled-components';
import Checkbox from "./Checkbox";

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

export default memo(function TodoItem({ todo, onChange, onDelete }) {
  console.log("I'm not updating all the time!", todo);
  return (
    <Item key={todo.id}>
      <Checkbox
        id={todo.id}
        label={todo.text}
        checked={todo.completed}
        onChange={() => onChange(todo.id)}
      />
      <Button onClick={() => onDelete(todo.id)}>x</Button>
    </Item>
  );
});
