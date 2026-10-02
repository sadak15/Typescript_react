import { useState, type ChangeEvent, type FormEvent } from 'react'

interface AgeFormProps {
  onSubmit: (age: number) => void
}

function AgeForm({ onSubmit }: AgeFormProps) {
  const [age, setAge] = useState<number>(0)
  const [error, setError] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (age < 18) {
      setError('You must be at least 18')
      return
    }
    setError('')
    onSubmit(age)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={age} onChange={handleChange} placeholder="Age" />
      <button type="submit">Submit</button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default AgeForm
