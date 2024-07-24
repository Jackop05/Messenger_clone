import React from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterMain = (props) => {

  return (
    <div className='bg-dark-transparent backdrop-blur-sm z-50 fixed bottom-0 flex justify-around w-full p-2'>
        <div className='flex flex-col'>
            <FaEnvelope className='text-white w-8 h-8' />
            <div className='text-sm text-center text-white' onClick={props.handleChatsClick} >Chats</div>
        </div>
        <div className='flex flex-col'>
            <FaUser className='text-white w-8 h-8 self-center' />
            <Link to="/"><div className='text-sm text-center text-white' >New Users</div></Link>
        </div>
    </div>
  )
}

export default FooterMain;