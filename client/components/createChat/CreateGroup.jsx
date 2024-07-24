import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

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
                credentials: 'include'
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
        <div>
            <div className='w-full flex justify-start absolute'>
                <Link to='/'><FaArrowLeft className="text-white m-8 w-6 h-6" /></Link>
            </div>

            <div className='bg-gray-900 h-screen w-screen flex flex-col justify-center'>
                <div className='text-red-300 text-xl text-center'>This feature is still in progress</div>
                <div className='flex flex-col gap-3 bg-gray-900 p-4 rounded-xl'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                        <label htmlFor="groupName" className='text-lg text-white mb-2'>Group Name:</label>
                        <input
                            type="text"
                            id="groupName"
                            value={groupName}
                            onChange={handleInputChange}
                            className='p-2 rounded-md bg-gray-700 text-white border border-gray-700 outline-none'
                            placeholder="Enter Group Name..."
                        />
                        <button type="submit" className='text-md text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md'>
                            Create Group
                        </button>
                    </form>
                    {message && <p className='text-md text-green-500'>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default CreateGroup;
