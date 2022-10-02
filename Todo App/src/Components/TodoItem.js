import React from "react";

export default function Todo({ todo, onDelete, OnComplete }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className=" container flex"
    >
      <div>
        <h4>{todo.title} </h4>
        <p>{todo.description} </p>
      </div>
      <div>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(todo)}
        >
          Delete
        </button>

        <button
          className="btn btn-primary btn-sm"
          onClick={() => OnComplete(todo)}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
