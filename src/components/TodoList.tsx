import { useState } from 'react'

interface Todo {
  id: number
  task: string
  done: boolean
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = () => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task: `Task #${todos.length + 1}`,
      done: false,
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div>
      <h2>Todos</h2>
      <button onClick={addTodo}>Add todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.done ? '✅' : '⬜'}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
