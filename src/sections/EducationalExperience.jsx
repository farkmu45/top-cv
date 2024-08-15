/* eslint-disable react/prop-types */
export default function EducationalExperience({ educations }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Educations</h2>
      {educations.map((education) => (
        <div key={education.id}>
          <p>{education.school}</p>
          <p>{education.degree}</p>
          <p>{education.dateOfStudy}</p>
        </div>
      ))}
    </div>
  )
}
