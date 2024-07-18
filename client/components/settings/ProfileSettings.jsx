import React from 'react';
import { FaFacebook, FaBell, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import SettingsConversation from './SettingsConversation';



const ProfileSettings = () => {
  return (
    <div className='bg-gray-900'>
        <div className='w-full flex justify-end absolute'>
            <Link to="/"><FaArrowRight className="  text-white m-8 w-6 h-6" /></Link>
        </div>
      <div className='bg-black h-screen overflow-y-scroll items-center text-center flex flex-col justify-start gap-3 text-white p-8 pt-32'>
          <img className='rounded-full w-20 h-20 mb-1' src="images/defaultUser.png" slt="Profile image" />
          <div className='text-xl font-bold mb-4'>Bro who pulls up</div>
          <div className='flex gap-6 mb-10'>
              <div className='flex flex-col gap-1 items-center'>
                  <div className='p-2 bg-gray-700 rounded-full'><FaFacebook className='w-6 h-6' /></div>
                  <div className='text-sm '>Profil</div>
              </div>
              <div className='flex flex-col gap-1 items-center'>
              <div className='p-2 bg-gray-700 rounded-full'><FaBell className='w-6 h-6' /></div>
                  <div className='text-sm '>Wycisz</div>
              </div>
          </div>

          <SettingsConversation />
      </div>
    </div>
  )
}

export default ProfileSettings;