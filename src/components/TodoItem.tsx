import React, { FunctionComponent } from "react";
import TodoItemVo from "../dto/TodoItemVo";

interface iTodoItemInnerProps {
  todoItem: TodoItemVo;
  detailInfo: (id: number) => void;
  complete: (id: number) => void;
}

const TodoItem: FunctionComponent<iTodoItemInnerProps> = (
  props: iTodoItemInnerProps
) => {
  return (
    <tr style={{ backgroundColor: props.todoItem.done === true ? "grey" : "" }}>
      <td>{props.todoItem.id}</td>
      <td>{props.todoItem.title}</td>
      <td>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => props.detailInfo(props.todoItem.id)}
        >
          상세보기
        </button>
      </td>
      <td>
        {props.todoItem.done === false ? (
          <button onClick={() => props.complete(props.todoItem.id)}>
            완료하기
          </button>
        ) : (
          <button>완료</button>
        )}
      </td>
    </tr>
  );
};

export default TodoItem;
