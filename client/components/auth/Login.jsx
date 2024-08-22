import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
                credentials: 'include'
            });

            const data = await response.json();

            if (response.ok) {
                navigate('/');
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className='bg-gray-900 min-h-screen flex flex-col'>
            <div className='w-full flex justify-end p-4'>
                <Link to="/"><FaArrowRight className="text-white w-6 h-6" /></Link>
            </div>
            <div className="flex-grow flex items-center justify-center px-4">
                <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md">
                    <h1 className="text-white text-xl sm:text-2xl font-bold mb-6 text-center">Login</h1>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">Username</label>
                            <input 
                                id="username"
                                type="text"
                                className="bg-gray-700 text-gray-100 placeholder-gray-400 rounded-lg w-full py-2 px-3 focus:outline-none"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input 
                                id="email"
                                type="email"
                                className="bg-gray-700 text-gray-100 placeholder-gray-400 rounded-lg w-full py-2 px-3 focus:outline-none"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6 sm:mb-8">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <input 
                                id="password"
                                type="password"
                                className="bg-gray-700 text-gray-100 placeholder-gray-400 rounded-lg w-full py-2 px-3 focus:outline-none"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button 
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >Sign In</button>
                        </div>
                    </form>
                    <div className="text-center mt-4">
                        <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Don't have an account? Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
