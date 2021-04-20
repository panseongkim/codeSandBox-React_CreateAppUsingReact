import React from "react";

export const CompleteTodo = (props) => {
  const { todos, onClickBack, onClickDelete } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div>
              <li key={todo} className="list-row">
                {todo}
              </li>
              <button onClick={() => onClickBack(index)}>戻す</button>
              <button
                id="delete2"
                onClick={() => onClickDelete(index, "delete2")}
              >
                削除
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
