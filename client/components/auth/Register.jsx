import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';




const RegisterPage = () => {

  return (
    <div className='bg-gray-900'>
        <div className='w-full flex justify-end absolute'>
            <Link to="/"><FaArrowRight className="  text-white m-8 w-6 h-6" /></Link>
        </div>
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
            <h1 className="text-white text-2xl font-bold mb-6 text-center">Register</h1>
            <form>
            <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">Username</label>
                <input 
                id="username"
                type="text"
                className="bg-gray-700 text-gray-100 placeholder-gray-400 rounded-lg w-full py-2 px-3 focus:outline-none"
                placeholder="Enter your username"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input 
                id="email"
                type="email"
                className="bg-gray-700 text-gray-100 placeholder-gray-400 rounded-lg w-full py-2 px-3 focus:outline-none"
                placeholder="Enter your email"
                />
            </div>
            <div className="mb-10">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input 
                id="password"
                type="password"
                className="bg-gray-700 text-gray-100 placeholder-gray-400 rounded-lg w-full py-2 px-3 focus:outline-none"
                placeholder="Enter your password"
                />
            </div>
            <div className="flex flex-col items-center justify-between">
                <button 
                type="submit"
                className="mb-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >Register</button>
                <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Already have an account? Login</Link>
            </div>
            </form>
        </div>
        </div>
    </div>
  );
};

export default RegisterPage;
