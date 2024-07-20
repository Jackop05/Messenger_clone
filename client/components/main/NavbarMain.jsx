import React, { useState } from 'react'
import { FaBars, FaPen, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


 
const NavbarMain = (props) => {
  


  return (
    <div className='bg-black p-4 fixed w-full z-50'>
      <div className='flex justify-between w-full mb-4'>
        <Link to="/user/settings/Jakub"><FaBars className="text-blue-600 w-6 h-6 cursor-pointer" /></Link>
        <div className='text-white font-bold text-xl'>Chats</div>
        <Link to='/create-group/jakub'><FaPen className="text-blue-600 w-6 h-6 cursor-pointer" /></Link>
      </div>
      <div className='w-full bg-gray-700 rounded-xl flex between p-2 '>
        <FaSearch className="text-gray-400 w-6 h-6 mr-2" />
        <input className="bg-gray-700 text-gray-100 placeholder-gray-300 rounded outline-none" placeholder="Search" value={props.searchUser} onChange={(e) => {props.handleInputChange(e)}} />
      </div>
    </div>  
  )
}

export default NavbarMain;