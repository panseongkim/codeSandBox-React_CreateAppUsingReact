import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index, id) => {
    console.log("受け取ったid : " + id);
    if (id === "delete1") {
      const newIncompleteTodos = [...incompleteTodos];
      //slice関数は第一引数に何番目の要素かを取得し、第二引数にそこからいくつ削除するかを指定する。
      newIncompleteTodos.splice(index, 1);
      setIncompleteTodos(newIncompleteTodos);
    } else if (id === "delete2") {
      const newCompleteTodos = [...completeTodos];
      //slice関数は第一引数に何番目の要素かを取得し、第二引数にそこからいくつ削除するかを指定する。
      newCompleteTodos.splice(index, 1);
      setCompleteTodos(newCompleteTodos);
    }
  };

  const onClickComplete = (index) => {
    const newInCompleteTodos = [...incompleteTodos];
    //slice関数は第一引数に何番目の要素かを取得し、第二引数にそこからいくつ削除するかを指定する。
    newInCompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newInCompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodosb = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodosb);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録出来るtodo5個までだよ～</p>
      )}

      <IncompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodo
        todos={completeTodos}
        onClickBack={onClickBack}
        onClickDelete={onClickDelete}
      />
    </>
  );
};
