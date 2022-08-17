import React from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import "../App.css"

const AddTodo = () => {
 const [title, setTitle] = React.useState("");

 const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
        await addDoc(collection(db, "todos"), {
            title,
            completed: false,
        });
        setTitle("");
    }
 };
  return (
    <form onSubmit={handleSubmit}>
        
            <textarea type="text" placeholder="Enter todo" value={title} 
            onChange={(e) => setTitle(e.target.value)} ></textarea>
             <button>add</button>
       

         
    </form>
  )
}

export default AddTodo