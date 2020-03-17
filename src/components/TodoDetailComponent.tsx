import React, { FunctionComponent, useState } from "react";
import TodoItemVo from "../dto/TodoItemVo";

interface ITodoDetailComponentInnerProps {
  detailInfoVo: TodoItemVo;
}

const TodoDetailComponent: FunctionComponent<ITodoDetailComponentInnerProps> = (
  props: ITodoDetailComponentInnerProps
) => {
  const [modalDisplay, setModalDisplay] = useState<string>("block");

  const disableModal = () => {
    setModalDisplay("none");
  };

  return (
    <div
      className="modal fade mt-4"
      id="myModal"
      style={{ display: modalDisplay, opacity: "100" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="mt-2">제목 : {props.detailInfoVo?.title}</h4>
          </div>
          <div className="modal-body">
            {props.detailInfoVo?.info === "" ? (
              <textarea className="form-control" rows={10}>
                등록된 내용이 없습니다.
              </textarea>
            ) : (
              <p>{props.detailInfoVo.info}</p>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-info">
              저장
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={disableModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDetailComponent;
