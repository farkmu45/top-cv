/* eslint-disable react/prop-types */
export default function EducationalExperience({ education }) {
    return (
      <div>
        <p>{education.school}</p>
        <p>{education.degree}</p>
        <p>{education.dateOfStudy}</p>
      </div>
    )
  }
  