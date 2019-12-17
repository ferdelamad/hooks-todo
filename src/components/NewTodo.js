import React, { useContext, useState, useCallback } from "react";
import styled from 'styled-components';
import { TodosDispatchContext } from './Todos';

const NEW_TODO_MAX_LENGTH = 42;
const NEW_TODO_WARNING_LENGTH = 25;

const Input = styled.input`
  border: 2px solid black;
  font-size: 1.75em;
  padding: 0.25em 0.5em;
  color: black;
  border-radius: 0.25em;
  background: transparent;
  transition: all 0.1s;
  position: relative;
  width: 50px;
  & + ul {
    border-radius: 0.25em 0.25em 0 0;
  }
`;

const Form = styled.form`
  position: relative;
  display: flex;
  &:after {
    content: attr(data-remaining);
    display: block;
    position: absolute;
    right: 10px;
    top: 50%;
    padding: 6px;
    border-radius: 50%;
    transform: translateY(-50%);
    z-index: 3;
    text-align: center;
    min-width: 20px;
    color: ${props => {
      if (props["data-remaining"] === 0) {
        return "black";
      } else if (props["data-remaining"] <= 25) {
        return "grey";
      } else {
        return "lightgrey";
      }
    }};
    background-color: ${props => {
      if (props["data-remaining"] === 0) {
        return "#F2545B";
      } else if (props["data-remaining"] <= 25) {
        return "#FFFDA1";
      } else {
        return "rgba(255, 255, 255, 0.25)";
      }
    }};
  }
  input {
    padding-right: 45px !important;
    width: 100%;
  }
`;

export default function NewTodo() {
  const dispatch = useContext(TodosDispatchContext);
  const [newTodo, updateNewTodo] = useState('');

  const handleNewTodoSubmit = useCallback(
    (e, text) => {
      e.preventDefault();
      dispatch({ type: 'ADD_TODO', text })
      updateNewTodo('');
    }
  );

  const handleNewTodoChange = useCallback(
    e => updateNewTodo(e.target.value)
  , []);

  return (
    <Form
      onSubmit={e => handleNewTodoSubmit(e, newTodo)}
      data-remaining={NEW_TODO_MAX_LENGTH - newTodo.length}>
      <Input
        type="text"
        autoFocusx
        placeholder="New Todo..."
        value={newTodo}
        maxLength={NEW_TODO_MAX_LENGTH}
        onChange={handleNewTodoChange}
      />
    </Form>
  );
};
