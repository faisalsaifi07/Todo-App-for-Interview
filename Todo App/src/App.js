import Todos from "./Components/Todos";
import Navbar from "./Components/Navbar";
import AddTodo from "./Components/AddTodo";
import Completed from "./Components/Completed";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const OnComplete = (todo) => {
    let newCompletedTask = todos.filter((e) => {
      return e === todo;
    });
    setCompleted([...newCompletedTask, ...completed]);
    // setCompleted(todos.filter((e)=>{
    //   return e==todo
    // }));
    // console.log("insideCom", completed)

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, description) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    let myTodo = {
      sno: sno,
      title: title,
      description: description,
    };

    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos
                  todos={todos}
                  onDelete={onDelete}
                  OnComplete={OnComplete}
                />
              </>
            }
          ></Route>
          <Route
            path="/completed"
            element={<Completed completed={completed} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
