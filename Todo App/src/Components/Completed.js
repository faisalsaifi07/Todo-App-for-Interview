import React from "react";

export default function Completed(props) {
  const { completed } = props;

  return (
    <div className="m-3">
      <h3>Completed Task</h3>

      <div>
        {completed.map((todo) => {
          return (
            <>
              <div
                className="m-5 container flex"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h4>{todo.title} </h4>
                  <p>{todo.description} </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
