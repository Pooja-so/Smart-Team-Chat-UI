/**
 * Sidebar renders a WhatsApp-style left panel with search and chat list.
 * Single responsibility: navigate between chats and new chat from the list.
 */
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChats } from "../context/ChatsContext.jsx";
import Toolbar from "../components/ui/Toolbar.jsx";
import Button from "../components/ui/Button.jsx";
import TextInput from "../components/ui/TextInput.jsx";
import ChatList from "../screens/ChatList.jsx";

export default function Sidebar() {
  const { chats } = useChats();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return chats;
    return chats.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.lastMessage?.toLowerCase().includes(q)
    );
  }, [chats, query]);

  return (
    <aside className="flex h-full w-full flex-col overflow-hidden md:border-r md:border-neutral-800 bg-neutral-950">
      <div className="p-3">
        <Toolbar title="Chats">
          <Button onClick={() => navigate("/new")}>+ New</Button>
        </Toolbar>
        <div className="mt-3">
          <TextInput
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chats"
          />
        </div>
      </div>
      <div className="flex-1 min-h-0 basis-0 overflow-y-auto p-3 pt-0">
        <ChatList
          items={filtered}
          onSelectChat={(id) => navigate(`/chats/${id}`)}
          onNewChat={() => navigate("/new")}
        />
      </div>
    </aside>
  );
}
