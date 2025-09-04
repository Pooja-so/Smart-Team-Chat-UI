/**
 * Reusable TextInput component for single-line inputs.
 * Single responsibility: render a styled input field.
 */
export default function TextInput({ className = '', ...props }) {
  const base = 'w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
  return <input className={`${base} ${className}`} {...props} />
}


