import React, { FunctionComponent, useState } from "react";
import "./Bootstrap.min.css";
import TodoListComponent from "./components/TodoListComponent";
import TodoItemVo, { create as createTodo } from "./dto/TodoItemVo";
import TodoItem from "./components/TodoItem";
import TodoDetailComponent from "./components/TodoDetailComponent";

const App: FunctionComponent = () => {
  const [todoItemList, setTodoItemList] = useState<TodoItemVo[]>([]);
  const [todoId, setTodoId] = useState<number>(0);
  const [detailChk, setDetailChk] = useState<boolean>(false);
  const [detailInfoVo, setDetailInfoVo] = useState<TodoItemVo>(
    new TodoItemVo()
  );

  const submitTodo = (todoText: string) => {
    const submitVo: TodoItemVo = {
      id: todoId,
      title: todoText,
      info: "",
      done: false
    };

    // 배열에 마지막에 추가
    setTodoItemList([...todoItemList, createTodo(submitVo)]);
    setTodoId(todoId + 1);
  };

  // 상세 보기
  const detailInfo = (id: number) => {
    setDetailChk(true);
    const someData: boolean = todoItemList.some(v => v.id === id);
    if (someData) {
      setDetailInfoVo(todoItemList.filter(v => v.id === id)[0]);
    }
  };

  // 완료
  const complete = (id: number) => {
    const completeIndex = todoItemList.findIndex(el => el.id === id);
    const tmpTodoItemVoList = [...todoItemList];
    tmpTodoItemVoList[completeIndex].done = true;
    setTodoItemList(tmpTodoItemVoList);
  };

  return (
    <div className="container-fluid">
      <TodoListComponent submitTodo={submitTodo}>
        {todoItemList.map(v => (
          <TodoItem
            todoItem={v}
            key={v.id}
            detailInfo={detailInfo}
            complete={complete}
          />
        ))}
      </TodoListComponent>
      {detailChk === true ? (
        <TodoDetailComponent detailInfoVo={detailInfoVo} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
