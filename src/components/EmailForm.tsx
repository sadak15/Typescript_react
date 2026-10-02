import { useState, type ChangeEvent, type FormEvent } from 'react'

interface EmailFormProps {
  onSubmit: (email: string) => void
}

function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(email)
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default EmailForm
