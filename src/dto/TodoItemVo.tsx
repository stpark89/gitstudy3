export interface ITodoItemVo {
  id: number;
  title: string | undefined;
  info: string | undefined;
  done: boolean | undefined;
}

export default class TodoItemVo implements ITodoItemVo {
  public id: number = 0;
  public title: string | undefined;
  public info: string | undefined;
  public done: boolean | undefined;
}

export const create = ({ id, title, info, done }: TodoItemVo) => {
  const next = new TodoItemVo();
  next.id = id;
  next.title = title;
  next.info = info;
  next.done = done;
  return next;
};
