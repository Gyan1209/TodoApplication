import { useRef } from "react";
import { MdAddBox } from "react-icons/md";
function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");

  const todoNameElement = useRef();
  const todoDateElement = useRef();
  // console.log(todoNameElement);
  // function handleNameChange(e) {
  //   setTodoName(e.target.value);
  //   console.log("inside handle name change!");
  // }
  // function handleDateChange(e) {
  //   setTodoDate(e.target.value);
  // }
  const handleOnClick = (event) => {
    event.preventDefault();

    let todoName = todoNameElement.current.value;
    let todoDate = todoDateElement.current.value;
    onNewItem(todoName, todoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleOnClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={(event) => handleNameChange(event)} //this.todoName() is undefined because this is not bound in the context of func tional components.
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDateElement}
            // value={todoDate}
            // onChange={(event) => handleDateChange(event)}
          />
        </div>
        <div className="col-2">
          <button
            // type="button"
            type="submit"
            className="btn btn-success kg-button"
            // onClick={handleOnClick} //arrow function itself is passed as the click handler, and it will only be executed when the button is clicked.
          >
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
