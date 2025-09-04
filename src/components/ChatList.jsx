/**
 * ChatList renders a list of conversations with a New Chat action.
 * Single responsibility: display chat summaries and emit selection.
 */
import Button from './ui/Button'
import Toolbar from './ui/Toolbar'

export default function ChatList({ items, onSelectChat, onNewChat }) {
  return (
    <div className="space-y-4">
      <ul className="m-0 list-none p-0 space-y-2">
        {items.map((chat) => (
          <ChatListItem key={chat.id} chat={chat} onClick={() => onSelectChat(chat.id)} />
        ))}
      </ul>
    </div>
  )
}

function ChatListItem({ chat, onClick }) {
  return (
    <li>
      <button onClick={onClick} className="w-full text-left rounded-lg border border-neutral-800 bg-neutral-900 p-3 hover:bg-neutral-800 transition-colors">
        <div className="font-semibold text-base">{chat.name}</div>
        <div className="mt-1 flex items-center justify-between text-[13px] md:text-sm text-neutral-400">
          <span className="truncate pr-3">{chat.lastMessage}</span>
          <span className="whitespace-nowrap">{chat.time}</span>
        </div>
      </button>
    </li>
  )
}


