import './App.css'
import EmailForm from './components/EmailForm'
import AgeForm from './components/AgeForm'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <>
      
      <EmailForm onSubmit={(email) => console.log('Email:', email)} />
    
      <AgeForm onSubmit={(age) => console.log('Age:', age)} />

      <ContactForm onSubmit={(data) => console.log('Contact:', data.name, data.email)} />
    </>
  )
}

export default App
