/* eslint-disable react/prop-types */
export default function GeneralInfo({ name, email, phone }) {
  return (
    <div>
      <p className='text-3xl font-bold mb-2'>{name}</p>
      <div className="flex flex-row gap-2">
        <p>{email}</p> | <p>{phone}</p>
      </div>
    </div>
  )
}
