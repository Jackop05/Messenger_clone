import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CreateGroup = () => {
    const [groupName, setGroupName] = useState('');
    const [message, setMessage] = useState('');

    
    const handleInputChange = (e) => {
        setGroupName(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/conversations/create-conversation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ groupName }),
                credentials: 'include',
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
            } else {
                setMessage('Error creating group: ' + data.message);
            }

        } catch (error) {
            setMessage('Error creating group: ' + error.message);
        }
    };



    return (
        <div className='bg-gray-900 min-h-screen flex flex-col items-center justify-center'>
            <div className='absolute top-4 left-4'>
                <Link to='/'>
                    <FaArrowLeft className="text-white w-6 h-6" />
                </Link>
            </div>

            <div className='bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-sm'>
                <h1 className='text-red-300 text-xl text-center mb-4'>This feature is still in progress (some functionalities might not work)</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <label htmlFor="groupName" className='text-lg text-white'>Group Name:</label>
                    <input
                        type="text"
                        id="groupName"
                        value={groupName}
                        onChange={handleInputChange}
                        className='p-3 rounded-md bg-gray-700 text-white border border-gray-600 outline-none'
                        placeholder="Enter Group Name..."
                    />
                    <button type="submit" className='text-md text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md'>Create Group</button>
                    {message && <p className='text-md text-green-500 text-center mt-4'>{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default CreateGroup;