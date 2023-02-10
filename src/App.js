import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Form from './components/Form';
import React, { useState } from "react";


const todoStart = [
  {
    id:0,
    title: "Lage middag",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis rhoncus vulputate. Donec pellentesque orci in scelerisque luctus. Sed orci augue, posuere vel purus id, condimentum dictum ante. Nam arcu odio, aliquam eu mauris eget, eleifend molestie tellus. Sed lacus felis, imperdiet id auctor eu, euismod vel mi. Integer tincidunt neque vitae nulla tristique feugiat. Donec vulputate elementum facilisis. Nulla aliquam pretium aliquam. Nulla molestie hendrerit dolor in eleifend."
  }
]

function App() {
  const [todo, setTodo] = useState({title: "", content: ""})
  const [todos, setTodos] = useState([...todoStart])
  const [id, setId] = useState(1)

  const addToDo = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    setTodo((prev) => ({...prev, [inputName]: inputValue}))
  }

  const handleClick = () => {
    setId((prev) => prev + 1)
    setTodos((prev) => [
      {id, title: todo.title, content: todo.content}, ...prev
    ])
  }

  const removeToDos = (todoid) => {
    setTodos(todos.filter((item) => item.id !== todoid))
    console.log("bitch")
  }

  return (
    <>
    <Navbar username="karoliml"/>
    <section className='container'>
    <Form handleClick={handleClick} addToDo={addToDo} todo={todo}/>
    </section>
    <Todos todoStart={todos} removeToDos={removeToDos}/>
    </>
  );
}

export default App;
