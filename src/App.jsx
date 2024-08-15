import { useState } from 'react'
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
    <div>
      <div>
        <div>
          <h1>General Info</h1>
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
        </div>
        <div>
          <h1>Educational Experience</h1>
          <input
            type='text'
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
          <input
            type='text'
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
          <input
            type='date'
            value={dateOfStudy}
            onChange={(e) => setDateOfStudy(e.target.value)}
          />
          <button onClick={submitEducation}>Submit</button>
        </div>
      </div>
      <div>
        <GeneralInfo
          name={generalInfo.name}
          email={generalInfo.email}
          phone={generalInfo.phone}
        />
        {educations.map((education) => (
          <EducationalExperience education={education} key={education.id} />
        ))}
      </div>
    </div>
  )
}

export default App
