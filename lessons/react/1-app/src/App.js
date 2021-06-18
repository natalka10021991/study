import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <button onClick={consoleLogTodos}>
          Click on me
        </button>
        <br/>
        <button onClick={addTodo}>
          Add todo
        </button>
        <br/>
        <button onClick={deleteTodo}>
          Delete todo
        </button>
        <br/>
        <button onClick={putTodo}>
          Put todo
        </button>
      </header>
    </div>
  );
}

export default App;

function consoleLogTodos() {
  getTodos().then((todos) => {
    console.log(todos);
  });
}

function getTodos() {
  return fetch('http://localhost:3333/api/todos')
  .then(res => res.json())
}

let todo = {
  data: {
    title: "new todo",
    description: "new description"
  }
}

function addTodo() {

  console.log(todo);
  return fetch('http://localhost:3333/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(todo)
  })
}

function putTodo() {
  return fetch('http://localhost:3333/api/todos', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      data: {
        title: "Put Title",
        description: "Put Descritption"
      },
      where: {
        id: 10
      }
    })
  })
}

function deleteTodo() {
  return fetch('http://localhost:3333/api/todos', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      where:
      {
        id: 5
      }
    })
  })
}
