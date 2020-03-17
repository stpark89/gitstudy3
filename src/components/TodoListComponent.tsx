import React, { useState } from "react";

interface ITodoListComponentInnerProps {
  submitTodo: (todoText: string) => void;
  children: React.ReactElement | React.ReactElement[];
}

const TodoListComponent = (props: ITodoListComponentInnerProps) => {
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
                <label>제목</label>
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
                onClick={() => {
                  setTodo("");
                  return props.submitTodo(tmpTodo);
                }}
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
                  <th>제목</th>
                  <th>상세내용</th>
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
