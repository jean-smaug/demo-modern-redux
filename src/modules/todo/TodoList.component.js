import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoAdapter, todosActions } from "./todo.slice";

export const TodoList = () => {
  const todos = useSelector((state) =>
    todoAdapter.getSelectors().selectAll(state.todos).splice(0, 20)
  );
  const todoStatus = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(todosActions.fetchTodos());
  }, []);

  if (todoStatus === "error") {
    return "Ça a merdé";
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};
