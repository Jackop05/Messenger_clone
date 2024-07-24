import React from 'react';
import { FaFacebook, FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate, useParams  } from 'react-router-dom';



const ProfileSettings = () => {
    const navigate = useNavigate();
    const { username } = useParams();
    

    const handleClick = async () => {

        try {
            const response = await fetch('http://localhost:5000/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            });
    
    
            if (!response.ok) {
                navigate('/');
                throw new Error(`Error occured while requesting for user data`);
            }
            navigate('/login');

        } catch (error) {
            console.error('Error fetching user data:', error);
            return null;
        }
    }

    return (
        <div className='bg-gray-900'>
            <div className='w-full flex justify-end absolute'>
                <Link to='/'><FaArrowRight className="  text-white m-8 w-6 h-6" /></Link>
            </div>
            <div className='bg-black h-screen overflow-y-scroll items-center text-center flex flex-col justify-start gap-3 text-white p-8 pt-32'>
                <img className='rounded-full w-20 h-20 mb-1' src="images/defaultUser.png" alt="Profile image" />
                <div className='text-xl font-bold mb-4'>{username}</div>
                <div className='flex gap-6 mb-10'>
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='p-2 bg-gray-700 rounded-full'><FaFacebook className='w-6 h-6' /></div>
                        <div className='text-sm '>Profil</div>
                    </div>
                </div>

                <div className='mb-4 w-full max-w-[350px]'>
                    <div className='text-md text-left font-bold text-gray-600 mb-2'>Customization</div>
                    <div className='flex flex-col gap-3 bg-gray-900 p-4 rounded-xl'>
                        <div className='w-full flex justify-between items-center gap-3 border-b-[1px] border-gray-700 pb-3'>
                            <div className='flex items-center gap-3'>
                                <img className='rounded-full w-6 h-6' src="images/defaultUser.png" alt="Dark mode" />
                                <div className='text-md text-white'>Dark mode</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                            </label>
                        </div>
                        <div className='w-full flex flex-col gap-3 border-b-[1px] border-gray-700 pb-3'>
                            <div className='flex items-center gap-3'>
                                <img className='rounded-full w-6 h-6' src="images/defaultUser.png" alt="Change profile picture" />
                                <div className='text-md text-white'>Zmień zdjęcie profilowe</div>
                            </div>
                            <div className='w-full flex justify-center items-center p-4 border-2 border-dashed border-gray-600 rounded-lg text-gray-400'>
                                Drag & Drop your image here or click to upload -- it is in development process right now.
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center gap-3'>
                            <div className='flex items-center gap-3'>
                                <img className='rounded-full w-6 h-6' src="images/defaultUser.png" alt="Logout" />
                                <div className='text-md text-white'>Logout</div>
                            </div>
                            <button className='text-md text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md' onClick={handleClick}>Logout</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProfileSettings;