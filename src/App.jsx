import { useEffect, useState } from "react";
import TodoItem from "./components";
import TodoDetails from "./components/todo-details";

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [todoDetails, setTodoDetails] = useState([]);
  const [closeDetails, setCloseDetails] = useState(false);

  const fetchTodoList = async () => {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();
      if (result.todos && result.todos.length > 0) {
        setTodoList(result.todos);
        setLoading(false);
        // console.log(result.todos);
      } else {
        setTodoList([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const fetchTodoId = async (getTodoId) => {
    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${getTodoId}`
      );
      const details = await apiResponse.json();
    } catch (error) {
      console.log(error);
      setTodoDetails([]);
    }
  };

  const closeDetailsHandle = () => {
    setCloseDetails(false);
  };

  return (
    <>
      <h2>A Simple Todo App</h2>
      {todoList && todoList.length > 0
        ? todoList.map((todoItem) => (
            <TodoItem
              fetchTodoId={fetchTodoId}
              todo={todoItem}
              todoDetails={todoDetails}
              closeDetailsHandle
            />
          ))
        : null}
      <TodoDetails />
    </>
  );
}

export default App;
