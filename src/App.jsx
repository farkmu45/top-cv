import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import EducationalExperience from './sections/EducationalExperience'
import GeneralInfo from './sections/GeneralInfo'

function App() {
  // General Info
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

  // Educational Experience
  const [school, setSchool] = useState('')
  const [degree, setDegree] = useState('')
  const [dateOfStudy, setDateOfStudy] = useState('')
  const [educations, setEducations] = useState([])

  const submitEducation = () => {
    const tempEducations = structuredClone(educations)
    tempEducations.push({
      id: Date.now(),
      school,
      degree,
      dateOfStudy,
    })
    setEducations(tempEducations)
    setSchool('')
    setDegree('')
    setDateOfStudy('')
  }

  return (
    <div className='flex gap-16 flex-row p-6'>
      <div className='max-w-6xl'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold mb-2'>General Info</h1>
          <Input
            label='Name'
            value={name}
            id='name'
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label='Email'
            value={email}
            id='email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label='Phone'
            value={phone}
            id='phone'
            type='tel'
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className='grid grid-cols-2 gap-2 mt-5'>
            <Button onClick={submitGeneralInfo}>Submit</Button>
            <Button onClick={editGeneralInfo}>Edit</Button>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold mb-2 mt-5'>
            Educational Experience
          </h1>
          <Input
            label='School'
            value={school}
            id='school'
            type='text'
            onChange={(e) => setSchool(e.target.value)}
          />

          <Input
            label='Degree'
            value={degree}
            id='degree'
            type='text'
            onChange={(e) => setDegree(e.target.value)}
          />

          <Input
            label='Date of Study'
            value={dateOfStudy}
            id='dateOfStudy'
            type='date'
            onChange={(e) => setDateOfStudy(e.target.value)}
          />

          <Button className='mt-5' onClick={submitEducation}>
            Submit
          </Button>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <GeneralInfo
          name={generalInfo.name}
          email={generalInfo.email}
          phone={generalInfo.phone}
        />
        <EducationalExperience educations={educations} />
      </div>
    </div>
  )
}

export default App
