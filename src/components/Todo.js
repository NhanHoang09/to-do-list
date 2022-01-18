import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";


function Todo({ todos, completeTodo, removeTodo, updateTodo, setTodos }) {

  const completedStyle = {
    fontStyle: "italic",
    color: "#191c2f71",
    textDecoration: "line-through",
  };


  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={todo.id}
    >
      <div style={todo.completed ? completedStyle : null}  key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
