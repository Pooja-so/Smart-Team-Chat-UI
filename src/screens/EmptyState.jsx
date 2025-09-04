/**
 * EmptyState shows a friendly prompt when no chat is selected.
 * Single responsibility: display placeholder content on the right pane.
 */
export default function EmptyState() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center text-neutral-400">
        <div className="text-2xl md:text-3xl font-bold text-neutral-200">Smart Team Chat</div>
        <div className="mt-2 text-base md:text-lg">Select a conversation from the left, or start a new chat.</div>
      </div>
    </div>
  )
}


