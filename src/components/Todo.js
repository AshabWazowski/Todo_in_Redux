import "./app.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../action";

function Todo() {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  const handleKey = (e) => {
    if (e.key === "Enter") {
      dispatch(addTodo(inputData), setInputData(""));
    }
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>
              Add your list hare{" "}
              <span role="img" aria-label="">
                👇
              </span>
            </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="🎯 Add Item here.."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
              onKeyDown={handleKey}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      title="delete item"
                      onClick={() =>
                        dispatch(deleteTodo(elem.id), setInputData(""))
                      }
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
