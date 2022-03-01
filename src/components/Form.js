import React from "react";
import { FiPlus } from "react-icons/fi";

const Form = ({ setStatus, inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  
// going to add a filter for the todos
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className="user_input">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        placeholder="Start typing..."
      />
      <button className="todo-button" onClick={submitTodoHandler}>
        <FiPlus className="plus-button" />
      </button>
      {/* <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div> */}
    </form>
  );
};

export default Form;
