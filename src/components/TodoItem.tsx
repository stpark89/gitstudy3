import React, { FunctionComponent, useEffect } from "react";
import TodoItemVo from "../dto/TodoItemVo";

interface iTodoItemInnerProps {
  todoItem: TodoItemVo;
}

const TodoItem: FunctionComponent<iTodoItemInnerProps> = (
  props: iTodoItemInnerProps
) => {
  useEffect(() => {
    console.log(`TodoItem Mounted ${props.todoItem.text}`);
    return () => console.log(`Todo Item Unmounted ${props.todoItem.text}`);
  }, []);

  return (
    <tr>
      <td>{props.todoItem.id}</td>
      <td>{props.todoItem.text}</td>
      <td>{props.todoItem.done}</td>
    </tr>
  );
};

export default TodoItem;
