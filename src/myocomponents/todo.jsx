import React from "react";
import "../cssOfComponents/todo.css";
export default function Todos(props) {
  return (
    <div className="container">
      <div className="todo-app">
        <h2>
          To-Do List <img src="/images/icon.png" />
        </h2>
        <div className="row">
          <input type="text" id="Input-box" placeholder="Add you task" />
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}
