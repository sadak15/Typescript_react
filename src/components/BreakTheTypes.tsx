import { useState } from 'react'

interface User {
  username: string
  email: string
}

interface Todo {
  id: number
  task: string
  done: boolean
}

function BreakTheTypes() {
  const [count, setCount] = useState<number>(0)
  const [user, setUser] = useState<User | null>(null)
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <div>
      <p>count: {count}, user: {user?.username ?? 'none'}, todos: {todos.length}</p>
      <button onClick={() => setCount(count + 1)}>bump</button>
      <button onClick={() => setUser(null)}>clear user</button>
      <button onClick={() => setTodos([])}>clear todos</button>
    </div>
  )
}

export default BreakTheTypes
