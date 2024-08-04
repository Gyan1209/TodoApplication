import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Welcome from "./components/Welcome";
import { useState } from "react";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (todoName, todoDate) => {
    setTodoItems((currVal) => {
      return [...currVal, { name: todoName, dueDate: todoDate }];
    });
  };
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItems);
  };

  // return (
  //   <TodoItemsContext.Provider
  //     value={{
  //       todoItems: todoItems,
  //       addNewItem: addNewItem,
  //       deleteItem: deleteItem,
  //     }}
  //   >
  //     <center className="todo-container">
  //       <AppName />
  //       <AddTodo></AddTodo>
  //       {/* {todoItems.length === 0 && <Welcome></Welcome>} */}
  //       <Welcome></Welcome>
  //       <TodoItems></TodoItems>
  //     </center>
  //   </TodoItemsContext.Provider>
  // );
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={addNewItem} />
      <Welcome todoItems={todoItems} />
      <TodoItems todoItems={todoItems} onDeleteClick={deleteItem} />
    </center>
  );
}

export default App;

/*React has two main phases: the render phase and the commit phase.
During the render phase, React constructs the component tree and determines the changes needed. This phase can happen multiple times for the same update to ensure that everything is correct.
During the commit phase, React actually updates the DOM. The render phase can cause multiple console logs if React re-renders the component multiple times before committing the changes.*/

/*setTodoItems can be called with either a new state value directly or a function (the updater function) that takes the current state as its argument and returns the new state.
This updater function ensures that the state update is based on the latest state value*/
