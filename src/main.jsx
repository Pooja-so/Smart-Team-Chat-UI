/**
 * App entry: sets up React Router and global providers.
 * Single responsibility: render RouterProvider into the root.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChatsProvider } from "./context/ChatsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChatsProvider>
      <App/>
    </ChatsProvider>
  </StrictMode>
);
