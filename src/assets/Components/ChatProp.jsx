import React from 'react'

const ChatProp = ({ message,icon, className,key}) => {
  console.log("message is:",message);
  return (
    <div className='flex gap-[1rem]'>
      <div className='h-[2rem] w-[2rem] py-[6px]  rounded-full bg-slate-700'>
{icon}
      </div>
      <div className={`rounded-lg p-3 text-white ${className}`}>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default ChatProp
