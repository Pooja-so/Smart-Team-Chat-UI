/**
 * Reusable Toolbar container. Aligns title and right-aligned actions.
 * Single responsibility: layout for header bars.
 */
export default function Toolbar({ title, children }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-neutral-800 pb-3">
      <h2 className="m-0 text-xl md:text-2xl font-bold">{title}</h2>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  )
}


