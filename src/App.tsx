import React, { FunctionComponent, useState } from "react";
import "./Bootstrap.min.css";
import TodoListComponent from "./components/TodoListComponent";
import TodoItemVo, { create as createTodo } from "./dto/TodoItemVo";
import TodoItem from "./components/TodoItem";

// 할일 번호
let todoNo = 0;

const App: FunctionComponent = () => {
  const [todoItemList, setTodoItemList] = useState<TodoItemVo[]>([]);

  const submitTodo = (todoText: string) => {
    console.log("처음 todoNo" + todoNo);

    const submitVo: TodoItemVo = {
      id: todoNo,
      text: todoText,
      done: false
    };

    // 배열에 마지막에 추가
    //setTodoItemList([...todoItemList, createTodo(submitVo)]);
    setTodoItemList(todoItemList.map(createTodo).concat(createTodo(submitVo)));
    todoNo++;
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
