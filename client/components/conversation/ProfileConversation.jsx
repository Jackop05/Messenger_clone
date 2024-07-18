import React from 'react';
import { FaAngleLeft, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const ProfileConversation = () => {
  return (
    <div className='bg-black p-4 fixed w-full top-0 z-50 flex justify-between items-center'>
        <div className="flex justify-left gap-2 items-center">
            <Link to="/"><FaAngleLeft className='text-white w-8 h-8  ' /></Link>
            <img src="images/defaultUser.png" alt="Profile image" className='rounded-full text-white w-10 h-10' />
            <div className='text-white text-lg'>Bro who pulls up</div>
        </div>

        <Link to="/conversation/settings/Jakub"><FaBars className="text-white w-6 h-6" /></Link>
    </div>  
  )
}

export default ProfileConversation;