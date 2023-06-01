import { useEffect, useState } from 'react';
import Item from './item';
import Loading from './loading';


const Collection = () => {

  const[todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // by default, initiates a GET request on initial load


// =====================================================================================================


  const printStorage = () => {
    const storage = localStorage.getItem("data");
    const adj = JSON.parse(storage)
    console.log(adj)
  }


  // print out everything in localstorage
  const checkStorage = () => {
      // retrieve the localstorage variable and convert back to JSON
      const a = localStorage.getItem("data")
      const storedData = JSON.parse(a)
      console.log(todos, storedData)

      if(todos !== storedData) {
        Find()
      } else {
        return
      }
  }

    // localStorage.setItem(example, JSON.stringify(example))
  const store = (receivedData) => {
    // takes data as it is received from the database
    console.log(receivedData)
    // convert to a string from JSON so that it can be stored
    localStorage.setItem("data", JSON.stringify(receivedData))
    // checks storage to compare what's stored
    checkStorage()
  }

// trigger a fetch request
  const Find = () => {
      fetch('/api/todos')
      .then((response) => {
        console.log(response) 
        return response.json()
    })
      .then((data) => {
        console.log(data)
        setTodos(data)
        store(data)
    })
  }
// =====================================================================================================

// default load data on load
  useEffect(() => { Find() }, []);

  const handleAddTodo = () => {
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todo: newTodo })
    })
    .then((response) => {
      response.json()
      console.log(response)
    })
    .then((data) => {
      console.log(data)
      setTodos([...todos, data]);
      setNewTodo('');
    })
  }

  // const handleDeleteTodo = (id) => {
  //   fetch('/api/todos', {
  //     method: 'DELETE',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ id })
  //   })
  //   .then((response) => response.json())
  //   .then((deletedCount) => {
  //     if(deletedCount === 1) {
  //       const updatedTodos = todos.filter((todo) => todo._id !== id);
  //       setTodos(updatedTodos);
  //     }
  //   })
  // }

  return (
    <div className="flex flex-col justify-center" onLoad={checkStorage}>
      {
        todos.length > 0 ? todos.map(obj => {
          return <Item todo={obj.todo} key={obj._id} />})
          : <Loading />
      }
      <input className="border-2 border-black" type="text" value={newTodo} onChange={(e) => {setNewTodo(e.target.value)}}/>
      <button onClick={printStorage}> Add Todo </button>
      {/* <ul>
        {todos.map((todo) => {
          <li key={todo._id}> 
            {todo.text} 
            <button onClick={() => handleDeleteTodo(todo._id)}> Delete Todo </button>
          </li>
        })}
      </ul> */}
    </div>
  );
};

export default Collection;
