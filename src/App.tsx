import React, { FunctionComponent, useState } from "react";
import "./Bootstrap.min.css";
import TodoListComponent from "./components/TodoListComponent";
import TodoItemVo, { create as createTodo } from "./dto/TodoItemVo";
import TodoItem from "./components/TodoItem";

const App: FunctionComponent = () => {
  const [todoItemList, setTodoItemList] = useState<TodoItemVo[]>([]);
  const [todoId, setTodoId] = useState<number>(0);

  const submitTodo = (todoText: string) => {
    const submitVo: TodoItemVo = {
      id: todoId,
      text: todoText,
      done: false
    };

    // 배열에 마지막에 추가
    //setTodoItemList([...todoItemList, createTodo(submitVo)]);
    setTodoItemList(todoItemList.map(createTodo).concat(createTodo(submitVo)));
    setTodoId(todoId + 1);
  };

  return (
    <div className="container-fluid">
      <TodoListComponent submitTodo={submitTodo}>
        {todoItemList.map(v => (
          <TodoItem todoItem={v} />
        ))}
      </TodoListComponent>
    </div>
  );
};

export default App;
