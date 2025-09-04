/**
 * Reusable Panel container with optional dashed style for AI outputs.
 * Single responsibility: provide a styled content wrapper.
 */
export default function Panel({ children, dashed = false, className = '' }) {
  const base = 'rounded-lg p-4 bg-neutral-900 border'
  const border = dashed ? 'border-dashed border-neutral-600' : 'border-neutral-800'
  return <div className={`${base} ${border} ${className}`}>{children}</div>
}


