import React, { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getData = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and description can not be blank");
    } else {
      addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="container ">
      <h3>Add todo</h3>
      <form className="m-2 my-1" onSubmit={getData}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Task
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="form-control"
            id="description"
          />
        </div>
        <button className="btn btn-success btn-sm">Add Todo</button>
      </form>
    </div>
  );
}
