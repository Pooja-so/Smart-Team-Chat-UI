export default function Message({ message }) {
    const isSelf = message.author === 'You'
    return (
      <div className={`flex ${isSelf ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-[90%] md:max-w-[70%] rounded-2xl px-3 md:px-4 py-2 shadow-sm ${isSelf ? 'bg-indigo-600 text-white rounded-br-sm' : 'bg-neutral-800 text-neutral-100 rounded-bl-sm'}`}>
          <div className={`mb-1 text-[11px] font-semibold ${isSelf ? 'text-white' : 'text-neutral-100'}`}>
            {message.author}
          </div>
          <div className="text-sm leading-relaxed whitespace-pre-wrap break-words">{message.text}</div>
          <div className={`mt-1 flex justify-end text-[10px] ${isSelf ? 'text-indigo-100/80' : 'text-neutral-300/70'}`}>
            {message.time}
          </div>
        </div>
      </div>
    )
  }