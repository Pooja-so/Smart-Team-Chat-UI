/**
 * ChatWindow displays a conversation thread and AI action placeholders.
 * Single responsibility: render one chat and provide AI UI actions.
 */
import { useEffect, useState } from 'react'
import Message from '../components/Message'
import Toolbar from '../components/ui/Toolbar'
import Panel from '../components/ui/Panel'
import Button from '../components/ui/Button'


export default function ChatWindow({ chat, onBack }) {
  const [smartReply, setSmartReply] = useState('')
  const [summary, setSummary] = useState('')

  // Reset generated helpers when switching chats
  useEffect(() => {
    setSmartReply('')
    setSummary('')
  }, [chat?.id])

  function generateSummary() {
    setSummary(
      'The team discussed design choices and converged on Option B as the most accessible. Next step: finalize color palette.'
    )
  }

  function generateSmartReply() {
    setSmartReply(
      'Sounds good! I can prepare a quick checklist to finalize the palette today. Would you like me to share it?'
    )
  }

  return (
    <div className="flex h-full flex-col">
      <div className="shrink-0">
        <Toolbar title={chat.name}>
          <Button variant="ghost" className="md:hidden" onClick={onBack}>← Back</Button>
        </Toolbar>
      </div>

      {/* Sticky actions bar below header */}
      <div className="shrink-0 sticky top-0 z-10 bg-neutral-950/95 backdrop-blur border-b border-neutral-800 py-2">
        <div className="px-3 md:px-4">
          <Button variant="secondary" onClick={generateSummary}>Summarize Thread</Button>
        </div>
      </div>

      {/* Messages area is the only scrollable section */}
      <div className="flex-1 min-h-0 flex flex-col gap-3 md:gap-4 py-3 md:py-4">
        <div className="flex-1 min-h-0 overflow-y-auto px-0 md:px-0">
          <Panel>
            <div className="grid gap-3">
              {chat.messages.map((m) => (
                <Message key={m.id} message={m} />
              ))}
            </div>
          </Panel>
        </div>

        {/* AI outputs outside the scroll area */}
        {summary && (
          <Panel dashed className="mx-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="font-semibold">Summary:</span> {summary}
              </div>
              <button
                type="button"
                onClick={() => setSummary('')}
                className="inline-flex items-center justify-center rounded-md border border-red-700 bg-red-900/30 px-2 py-1 text-xs font-medium text-red-300 hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-red-500 ring-offset-2 ring-offset-neutral-900"
                aria-label="Dismiss summary"
                title="Dismiss"
              >
                ×
              </button>
            </div>
          </Panel>
        )}
        {smartReply && (
          <Panel dashed className="mx-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="font-semibold">Suggested reply: </span> “{smartReply}”
              </div>
              <button
                type="button"
                onClick={() => setSmartReply('')}
                className="inline-flex items-center justify-center rounded-md border border-red-700 bg-red-900/30 px-2 py-1 text-xs font-medium text-red-300 hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-red-500 ring-offset-2 ring-offset-neutral-900"
                aria-label="Dismiss suggested reply"
                title="Dismiss"
              >
                ×
              </button>
            </div>
          </Panel>
        )}
      </div>

      {/* Input bar with Send and Smart Reply on the right */}
      <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-t border-neutral-800 bg-neutral-950 p-2 md:p-3">
        <input disabled className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500" placeholder="Type a message (dummy, no send)" />
        <Button disabled>Send</Button>
        <Button variant="secondary" onClick={generateSmartReply}>Smart Reply Suggestion</Button>
      </div>
    </div>
  )
}


