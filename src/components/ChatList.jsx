/**
 * ChatList renders a list of conversations with a New Chat action.
 * Single responsibility: display chat summaries and emit selection.
 */
import ChatListItem from "./ChatListItem"

export default function ChatList({ items, onSelectChat }) {
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


