# Smart Team Chat
---
### Smart Team Chat is a prototype chat application designed for teams. It provides a simple yet effective interface to start conversations, view ongoing chats, and experiment with **AI-powered features** like message summarization and smart reply suggestions. 
---
## 🛠️ Tech Stack

- **Frontend:** React.js, Vite  
- **Styling:** Tailwind CSS (or your chosen CSS framework)  
- **AI Placeholders:** Static/dummy data for now (future integration with AI APIs possible)  
---

## 🚀 Features

### 🔹 1. New Chat
- Start a new conversation by entering a participant's name.  
- Includes an **AI-powered "Generate Icebreaker"** button → generates a friendly placeholder message to kick off the chat.  

### 🔹 2. Chat List (Sidebar)
- Scrollable sidebar showing all existing chats.  
- Each chat displays:  
  - **Name** of the participant/team  
  - **Last message preview**  
  - **Timestamp** of the latest activity  
- Built-in **Search bar** to quickly filter chats by **name** or **last message**.  

### 🔹 3. Chat Window
- Displays the **full conversation** of a selected team chat.  
- Includes AI utility buttons:  
  - **Summarize Thread** → shows a quick example summary of the conversation.  
  - **Smart Reply Suggestion** → suggests a placeholder auto-reply.  

---

## 🖼️ UI Overview

- **New Chat Screen** → Enter participant name + Generate Icebreaker.  
- **Chat List Sidebar** → Scrollable list with search functionality.  
- **Chat Window** → Conversation view with summarization & reply suggestion.  

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/smart-team-chat.git
cd smart-team-chat
```
### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

### The app will be available at:
👉 http://localhost:5173 (default for Vite projects)

---

## 📌 Notes
- This is a **prototype/demo project**, AI responses (icebreaker, summary, smart replies) are placeholders only.  
- Can be extended with **real AI APIs** (like OpenAI) for production-ready features.  
