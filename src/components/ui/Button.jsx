/**
 * Reusable Button component. Renders a styled button with variants.
 * Single responsibility: style and render an interactive button.
 */
export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-500 focus:ring-purple-400 ring-offset-neutral-900',
    secondary: 'bg-purple-900/30 text-purple-200 hover:bg-purple-900/50 focus:ring-purple-500 ring-offset-neutral-900',
    ghost: 'bg-transparent text-purple-300 hover:bg-purple-900/30 focus:ring-purple-500 ring-offset-neutral-900',
  }
  const cls = `${base} ${variants[variant] || variants.primary} ${className}`
  return (
    <button className={cls} {...props}>{children}</button>
  )
}


