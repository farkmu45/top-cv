import { useState } from 'react'
import GeneralInfo from './sections/GeneralInfo'

function App() {
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john@doe.com')
  const [phone, setPhone] = useState('+1 (555) 555-5555')
  const [generalInfo, setGeneralInfo] = useState({
    name: 'John Doe',
    email: 'john@doe.com',
    phone: '+1 (555) 555-5555',
  })

  const submitGeneralInfo = () => {
    setGeneralInfo({
      name,
      email,
      phone,
    })
  }

  const editGeneralInfo = () => {
    setName(generalInfo.name)
    setEmail(generalInfo.email)
    setPhone(generalInfo.phone)
  }

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='tel'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={submitGeneralInfo}>Submit</button>
      <button onClick={editGeneralInfo}>Edit</button>

      <GeneralInfo data={generalInfo} />
    </div>
  )
}

export default App
