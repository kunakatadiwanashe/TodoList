import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// function selectTodoOption(todo){
//   switch(v){
//     case 
//   }
// }
export default function Todo({ todo, toggleComplete, handleDelete, handleEdit, toggleProgress}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo">
      <textarea
        style={{ textDecoration: todo.completed && "line-through" }}
        // style={{ color: todo.inProgress && "red" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      ></textarea>
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>

        <button
          className="button-complete"
          onClick={() =>  toggleProgress(todo)}
        >k
          <CheckCircleIcon id="i" />
        </button>


        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <EditIcon id="i" />
        </button>

        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>


      </div>
    </div>
  );
}