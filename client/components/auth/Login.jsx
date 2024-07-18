import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">Login</h1>
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
          <div className="mb-10">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input 
              id="password"
              type="password"
              className="bg-gray-700 text-gray-100 placeholder-gray-400 rounded-lg w-full py-2 px-3 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-center">
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Don't have an account? Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
