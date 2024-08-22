import React from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const FooterMain = (props) => {
  return (
    <div className='bg-dark-transparent backdrop-blur-sm z-50 fixed bottom-0 flex justify-around items-center w-full p-2 sm:p-4 lg:justify-center'>
      <div className='flex flex-col items-center mx-4 lg:mx-8'>
        <FaEnvelope className='text-white w-6 h-6 sm:w-8 sm:h-8' />
        <div className='text-xs sm:text-sm text-center text-white mt-1' onClick={props.handleChatsClick}>Chats</div>
      </div>
    </div>
  )
}

export default FooterMain;