/* eslint-disable react/prop-types */
export default function GeneralInfo({ data }) {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
    </div>
  )
}
