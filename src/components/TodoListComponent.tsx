import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoItemVo, { create as createTodo } from "../dto/TodoItemVo";

interface ITodoListComponentInnerProps {
  submitTodo: (todoText: string) => void;
  children: React.ReactElement | React.ReactElement[];
}

const TodoListComponent = (props: ITodoListComponentInnerProps) => {
  useEffect(() => {
    console.log("처음 mount");
    return () => console.log("처음 un Mount ");
  }, []);

  // 할일 번호
  let todoNo = 0;
  const [tmpTodo, setTodo] = useState<string>("");

  // 1.입력한 값 등록
  const addTodo = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value);
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="jumbotron">
          <p>오늘의 할일</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form>
              <div className="form-group">
                <label>할일</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={addTodo}
                  value={tmpTodo}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => props.submitTodo(tmpTodo)}
              >
                등록
              </button>
            </form>
          </div>
          <div className="col-sm-12 mt-4">
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>할일</th>
                  <th>완료 여부</th>
                </tr>
              </thead>
              <tbody>{props.children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoListComponent;
