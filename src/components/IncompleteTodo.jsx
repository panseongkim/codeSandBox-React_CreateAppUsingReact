import React from "react";

export const IncompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            //mapを使ってレンダリングする際にはkeyをわすれないこと。
            //Reacktの仮想DOMは差分のみ抽出して反映していくので、ループでレンダリングされた場合、何個目の要素なのかを正確に比較できるように目印を付ける必要がある。
            //keyを設定しないとおこられる。
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* onClickDelect(index)のように関数に引数を渡す場合は、 
                アロー関数にしてあげないと、その時点で実行されてしまう。*/}
              <button
                id="delete1"
                onClick={() => onClickDelete(index, "delete1")}
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
