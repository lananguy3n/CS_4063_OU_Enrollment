import React from 'react'

function Card({title, children}) {
  return (
    <div className='max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white p-2 m-2'>
        <div className='px-1 py-1'>
            <div className='font-bold text-xl mb-2'>
              {title}
            </div>
            <hr className='my-4'/>
            <div className='text-left'>
              {children}
            </div>
        </div>

    </div>
  )
}

export default Card;