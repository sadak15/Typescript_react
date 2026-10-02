import { useState, type ChangeEvent, type FormEvent } from 'react'

interface ContactData {
  name: string
  email: string
}

interface ContactFormProps {
  onSubmit: (data: ContactData) => void
}

function ContactForm({ onSubmit }: ContactFormProps) {
  const [form, setForm] = useState<ContactData>({ name: '', email: '' })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(form)
    setForm({ name: '', email: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm
