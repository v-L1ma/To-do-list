import { useState } from 'react'
import './app.css'
import Todo from './components/Todo';
import ToDoForm from './components/ToDoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import Footer from './components/Footer';

function App(){

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Arrumar uma vaga de dev",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: true,
    },
  ]);


  const addTodo = (text, category) => {

    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
   ];

   setTodos(newTodos);
  };

  const removeTodo = (id) =>{
    const newTodos = [...todos];
    // Os itens que tiverem o Id diferente continuaram no array e o que for igual terá seu valor setado para nulo
    const filteredTodos = newTodos.filter((todo)=> todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
      newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
      setTodos(newTodos)
  }

  const [search, setSearch] = useState("")
  const [filter, SetFilter] = useState("All")
  const [sort, setSort] = useState("Asc")

  return (
    <div>
      <div className='app'>
        <h1>Lista de tarefas</h1>
        <Search search={search} setSearch={setSearch}/>
        <Filter filter={filter} SetFilter={SetFilter} setSort={setSort}/>
        <div className='todo-list'>
          {todos
          //Ordena de acordo com o status da tarefa
          .filter((todos) =>
          filter === "All"
          ? true: filter ==="Completed"
          ? todos.isCompleted
          : !todos.isCompleted
          )
          //Busca pelo nome comparando as strings
          .filter((todo) =>(
            todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          ))
          //Compara as frases de duas em duas verificando se o valor e maior ou menor e ordena
          .sort((primeira, segunda)=>
          sort ==="Asc"
          ? primeira.text.localeCompare(segunda.text)
          : segunda.text.localeCompare(primeira.text)
        )
          //Faz um mapeamento e exibe os itens
          .map((todo) => (
            <Todo todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
          ))}
        </div>
          <ToDoForm addTodo={addTodo}/>
      </div>
      <Footer/>
    </div>
  )
  
}

export default App
