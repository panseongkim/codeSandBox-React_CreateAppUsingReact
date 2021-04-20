import React from "react";

//もし、CSSもコンポーネントごとに分けたい場合は、jsファイルの中で
//以下のように記入することも出来る。jsでstyleはオブジェクトとして指定するので、書き方に注意　※cssと比較すること
/**
 * const style = {
 *   backgroundColor: "#c1ffff",
     width: "400px",
     height: "30px",
     borderRadius: "8px",
     padding: "8px",
     margin: "8px"
 * };
 */

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    /*inputタグのinput変更の検知はonchangeでする */
    /*style={style} */
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
