import React from 'react';
import { FaAngleLeft, FaBars } from 'react-icons/fa';



const ProfileConversation = () => {
  return (
    <div className='bg-black p-4 fixed w-full z-50 flex justify-between items-center'>
        <div className="flex justify-left gap-2 items-center">
            <FaAngleLeft className='text-white w-8 h-8  ' />
            <img src="images/defaultUser.png" alt="Profile image" className='rounded-full text-white w-10 h-10' />
            <div className='text-white text-lg'>Bro who pulls up</div>
        </div>

        <FaBars className="text-white w-6 h-6" />
    </div>  
  )
}

export default ProfileConversation;