import { useState } from "react"
import styles from './ToDoForm.module.css'

function ToDoForm({addTodo}){

    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !category) return
        addTodo(value, category)
        setValue("")
        setCategory("")
    };

    return(
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Digite o titulo" 
                onChange={(e)=>setValue(e.target.value)}/>
                <select onChange={(e)=>setCategory(e.target.value)}>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button className={styles.submitbtn} type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}

export default ToDoForm