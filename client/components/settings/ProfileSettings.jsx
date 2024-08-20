import React from 'react';
import { FaFacebook, FaBell, FaArrowLeft } from 'react-icons/fa';
import { Link, useLocation, useParams } from 'react-router-dom';

import SettingsConversation from './SettingsConversation';

const ProfileSettings = () => {
    const { otherUsername, groupId } = useParams();
    const location = useLocation();
    const link = otherUsername ? `/conversation/${otherUsername}` : `/group/${groupId}`;

    return (
        <div className='bg-gray-900 min-h-screen flex flex-col'>
            <div className='w-full flex justify-start'>
                <Link to={link}>
                    <FaArrowLeft className="text-white m-8 w-6 h-6" />
                </Link>
            </div>
            <div className='bg-black flex-1 overflow-y-scroll flex flex-col items-center text-center text-white p-8'>
                <img className='rounded-full w-20 h-20 mb-4' src="images/defaultUser.png" alt="Profile image" />
                <div className='text-xl font-bold mb-4'>{otherUsername}</div>
                <div className='flex gap-6 mb-10'>
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='p-2 bg-gray-700 rounded-full'>
                            <FaFacebook className='w-6 h-6' />
                        </div>
                        <div className='text-sm'>Profile</div>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='p-2 bg-gray-700 rounded-full'>
                            <FaBell className='w-6 h-6' />
                        </div>
                        <div className='text-sm'>Mute</div>
                    </div>
                </div>
                <SettingsConversation />
            </div>
        </div>
    );
};

export default ProfileSettings;
