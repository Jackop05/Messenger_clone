import React from 'react'
import { FaBars, FaPen, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const NavbarMain = (props) => {
  return (
    <div className='bg-black p-4 fixed w-full z-50'>
      <div className='flex justify-between items-center w-full mb-4'>
        <Link to="/user/settings/Jakub">
          <FaBars className="text-blue-600 w-6 h-6 cursor-pointer" />
        </Link>
        <div className='text-white font-bold text-lg sm:text-xl'>Chats</div>
        <Link to='/create-group'>
          <FaPen className="text-blue-600 w-6 h-6 cursor-pointer" />
        </Link>
      </div>
      
      <div className='w-full bg-gray-700 rounded-xl flex items-center p-2'>
        <FaSearch className="text-gray-400 w-5 h-5 sm:w-6 sm:h-6 mr-2" />
        <input 
          className="bg-gray-700 text-gray-100 placeholder-gray-300 rounded w-full outline-none"
          placeholder="Search"
          value={props.searchUser}
          onChange={(e) => {props.handleInputChange(e)}}
        />
      </div>
    </div>  
  )
}

export default NavbarMain;
