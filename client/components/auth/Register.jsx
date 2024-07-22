import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Registration successful, redirect to profile page
                navigate('/login');
            } else {
                // Display error message
                setError(data.message);
            }
        } catch (error) {
            console.error('Error registering:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className='bg-gray-900'>
            <div className='w-full flex justify-end absolute'>
                <Link to="/"><FaArrowRight className="text-white m-8 w-6 h-6" /></Link>
            </div>
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
                    <h1 className="text-white text-2xl font-bold mb-6 text-center">Register</h1>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <form onSubmit={handleRegister}>
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
                        <div className="mb-10">
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
                        <div className="flex flex-col items-center justify-between">
                            <button 
                                type="submit"
                                className="mb-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Register
                            </button>
                            <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                                Already have an account? Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
