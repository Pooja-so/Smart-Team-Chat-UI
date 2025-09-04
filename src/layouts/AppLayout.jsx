/**
 * AppLayout provides a WhatsApp-style split layout with persistent sidebar.
 * Single responsibility: two-pane layout shell with Outlet for content.
 */
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'

export default function AppLayout() {
  const { pathname } = useLocation()
  const isDetailRoute = pathname.startsWith('/chats/') || pathname === '/new'
  return (
    <div className="h-screen w-full overflow-hidden grid grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-[320px_1fr] bg-neutral-950 text-neutral-100">
      <div className={`${isDetailRoute ? 'hidden' : 'block'} md:block`}>
        <Sidebar />
      </div>
      <main className={`${!isDetailRoute ? 'hidden' : 'block'} md:block bg-neutral-950 overflow-hidden md:border-l md:border-neutral-800`}>
        <div className="h-full p-3 md:p-4">
          <Outlet />
        </div>
      </main>
    </div>
  )
}


