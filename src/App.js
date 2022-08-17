import React from 'react';
import './App.css';
import Title from './components/Title';
import AddTodo from './components/AddTodo';
import {collection,query,onSnapshot,doc,updateDoc,deleteDoc, } from "firebase/firestore"

import { async } from '@firebase/util';
import Todo from './components/Todos';
import { db } from './firebase';

import BgVideo from './Assets/Matrix - 14912.mp4'
function App() {

  const [todos, setTodos]= React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q,  (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id});
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
  await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  }
  return (
    <>
        <Title />
        <AddTodo />
        <div className='todo_container'>
          { todos.map((todo) => (
                       <Todo 
                       key={todo.id}
                       todo={todo}
                       toggleComplete={toggleComplete}
                       handleDelete={handleDelete}
                       handleEdit={handleEdit}
                 
                 />
          ))}

        </div>
        
          <video src={BgVideo} autoPlay loop className='video-bg' />
     
    </>
  );
}

export default App;
