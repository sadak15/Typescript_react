import { useState } from 'react'

interface User {
  username: string
  email: string
}

function UserProfile() {
  const [user, setUser] = useState<User | null>(null)

  return (
    <div>
      {user ? (
        <>
          <h2>{user.username}</h2>
          <p>{user.email}</p>
          <button onClick={() => setUser(null)}>Log out</button>
        </>
      ) : (
        <>
          <p>No user logged in</p>
          <button onClick={() => setUser({ username: 'Ahmed', email: 'ahmed@example.com' })}>
            Log in
          </button>
        </>
      )}
    </div>
  )
}

export default UserProfile
