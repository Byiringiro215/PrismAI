import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

interface ListItem {
  item: string
}

interface Props {
  number: number | string
  title: string
  description: string
  listItems: ListItem[]
}

const HowPrismWorksFirstcomponent: React.FC<Props> = ({ number, title, description, listItems }) => {
  return (
    <div className='flex flex-col gap-[1rem] w-full'>
      <div className='h-[3rem] w-[3rem] rounded-full bg-purple-700 py-2 px-3'>
        <span className='text-white font-bold px-1 text-3xl'>{number}</span>
      </div>

      <h2 className='text-white font-bold text-2xl'>{title}</h2>
      <p className='text-gray-400 w-[]'>{description}</p>

      <ul className='flex flex-col gap-[0.5rem] text-gray-400'>
        {listItems.map((item, index) => (
          <li key={index} className='flex items-center gap-2'>
            <CheckIcon className='h-6 w-6 text-white rounded-full bg-gradient-to-b from-blue-400 to-purple-700' />
            {item.item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HowPrismWorksFirstcomponent
