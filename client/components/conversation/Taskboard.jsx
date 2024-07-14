import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';



const Taskboard = () => {
  return (
    <div className='bg-black p-4 w-screen fixed bottom-0 flex justify-between gap-4'>
        <input placeholder='Aa' className='rounded-3xl w-full py-2 px-6 outline-none text-lg' />
        <AiOutlineSend className='text-blue-600 text-[40px] self-align-center' />
        <div className='text-3xl cursor-pointer'>😁</div>
    </div>
  )
}

export default Taskboard