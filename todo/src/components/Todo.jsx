import styles from './Todo.module.css'

function Todo({todo , removeTodo, completeTodo}){
    return (
        <div key={todo.id} className={styles.todo}>

            <div className={styles.content}>
              <h1 style={{color: todo.isCompleted ? "green"  : ""}}>{todo.text}</h1>
              <p className="category"><span>Categoria:</span> {todo.category}</p>
            </div>

            <div className={styles.buttons}>
              <button onClick={() => completeTodo(todo.id)} className={styles.complete}>Completar</button>
              <button onClick={() => removeTodo(todo.id)} className={styles.remove}>X</button>
            </div>

          </div>
    )
}

export default Todo