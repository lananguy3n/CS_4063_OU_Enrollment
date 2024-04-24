import React from 'react';
import { Link } from 'react-router-dom';

function Card({title, addSemester=false, semesterval='Fall 2024',addlink=false, linkurl='nolink', linktext='linktext', children}) {
  return (
    <div className='max-w-xl rounded-2xl overflow-hidden shadow-lg bg-white p-2 m-2'>
        <div className='px-1 py-1'>
            <div className=' flex flex-row font-bold text-xl mb-2'>
              {title}
              {addSemester && <Link to="/plan" className='bg-gray-400 text-white px-2 py-1 ml-auto h-6 text-sm flex justify-center items-center'><button >{semesterval}</button></Link>}
              {addlink && <Link to={linkurl} className='text-blue-600 px-2 py-1 ml-auto h-6 text-base font-thin flex justify-center items-center'>{linktext}</Link>}
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