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

// Exercise 4: each line below is a deliberate type error.
// Uncomment one at a time to see what TypeScript reports.
function BreakTheTypes() {
  const [count, setCount] = useState<number>(0)
  const [user, setUser] = useState<User | null>(null)
  const [todos, setTodos] = useState<Todo[]>([])

  // ❌ Argument of type 'string[]' is not assignable to 'SetStateAction<Todo[]>'
  // setTodos([...todos, 'Buy milk'])

  // ❌ Argument of type 'string' is not assignable to 'SetStateAction<number>'
  // setCount('ten')

  // ❌ Property 'email' is missing in type '{ username: string }' but required in type 'User'
  // setUser({ username: 'Ahmed' })

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
