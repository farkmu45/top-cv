/* eslint-disable react/prop-types */
export default function Input({ id, type, label, value, onChange }) {
  return (
    <div>
      <label className='block text-sm font-medium text-gray-600' htmlFor={id}>
        {label}
      </label>
      <input
        className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
