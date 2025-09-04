/**
 * App entry: sets up React Router and global providers.
 * Single responsibility: render RouterProvider into the root.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import EmptyState from "./screens/EmptyState.jsx";
import ChatWindow from "./screens/ChatWindow.jsx";
import NewChat from "./screens/NewChat.jsx";
import { ChatsProvider } from "./context/ChatsContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useChats } from "./context/ChatsContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <EmptyState /> },
      { path: "chats/:chatId", element: <ChatWindowWrapper /> },
      { path: "new", element: <NewChatWrapper /> },
    ],
  },
]);

function ChatListWrapper() {
  const { chats } = useChats();
  const navigate = useNavigate();
  return (
    <ChatList
      items={chats}
      onSelectChat={(id) => navigate(`/chats/${id}`)}
      onNewChat={() => navigate("/new")}
    />
  );
}

function ChatWindowWrapper() {
  const { chats } = useChats();
  const navigate = useNavigate();
  const { chatId } = useParams();
  const chat = chats.find((c) => c.id === chatId);
  if (!chat) return <div className="p-4">Chat not found.</div>;
  return <ChatWindow chat={chat} onBack={() => navigate("/")} />;
}

function NewChatWrapper() {
  const { createChat } = useChats();
  const navigate = useNavigate();
  function handleCreate(name, msg) {
    const chat = createChat(name, msg);
    navigate(`/chats/${chat.id}`);
  }
  return <NewChat onBack={() => navigate("/")} onCreate={handleCreate} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChatsProvider>
      <RouterProvider router={router} />
    </ChatsProvider>
  </StrictMode>
);
