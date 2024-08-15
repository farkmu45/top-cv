/* eslint-disable react/prop-types */
export default function GeneralInfo({ name, email, phone }) {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  )
}
