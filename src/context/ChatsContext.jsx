/**
 * ChatsContext provides shared chat state and actions across routes.
 * Single responsibility: expose chats list, active chat lookup, and create action.
 */
import { createContext, useContext, useMemo, useState } from 'react'
import { chats as initialChats } from '../data/chats.js'

const ChatsContext = createContext(null)

export function ChatsProvider({ children }) {
  const [chats, setChats] = useState(initialChats)

  function createChat(name, firstMessage) {
    const newChat = {
      id: `c${Date.now()}`,
      name,
      lastMessage: firstMessage || 'Started a new chat',
      time: 'Now',
      messages: firstMessage
        ? [{ id: `m${Date.now()}`, author: 'You', text: firstMessage, time: 'Now' }]
        : [],
    }
    setChats((prev) => [newChat, ...prev])
    return newChat
  }

  const value = useMemo(() => ({ chats, createChat }), [chats])

  return <ChatsContext.Provider value={value}>{children}</ChatsContext.Provider>
}

export function useChats() {
  const ctx = useContext(ChatsContext)
  if (!ctx) throw new Error('useChats must be used within ChatsProvider')
  return ctx
}


