/* eslint-disable react/prop-types */
export default function Button({ children, onClick, className }) {
  return (
    <button
      className={`bg-blue-600 w-full hover:bg-blue-700 text-white font-medium py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}