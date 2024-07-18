import React from 'react'
import { Link } from 'react-router-dom';

const UsersPreview = (props) => {
  const searchUser = props.searchUser ? true : false;



  return ( 
    <div>
        {!searchUser &&
        <div className='flex flex-col gap-6 bg-black p-4 overflow-x-auto overflow-y-hidden relative top-[114px] pb-20'>
            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                        <div className='flex justify-left gap-2 text-sm font-bold text-gray-500'>
                            <div>You: </div>
                            <div>Hi, how are you?</div>
                            <div><span className='font-normal mr-1'>•</span>18:55</div>
                        </div>
                    </div>
                </div>
            </Link>
    
            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                        <div className='flex justify-left gap-2 text-sm font-bold text-gray-500'>
                            <div>You: </div>
                            <div>Hi, how are you?</div>
                            <div><span className='font-normal mr-1'>•</span>18:55</div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                        <div className='flex justify-left gap-2 text-sm font-bold text-gray-500'>
                            <div>You: </div>
                            <div>Hi, how are you?</div>
                            <div><span className='font-normal mr-1'>•</span>18:55</div>
                        </div>
                    </div>
                </div>
            </Link>
            
            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                        <div className='flex justify-left gap-2 text-sm font-bold text-gray-500'>
                            <div>You: </div>
                            <div>Hi, how are you?</div>
                            <div><span className='font-normal mr-1'>•</span>18:55</div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                        <div className='flex justify-left gap-2 text-sm font-bold text-gray-500'>
                            <div>You: </div>
                            <div>Hi, how are you?</div>
                            <div><span className='font-normal mr-1'>•</span>18:55</div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                        <div className='flex justify-left gap-2 text-sm font-bold text-gray-500'>
                            <div>You: </div>
                            <div>Hi, how are you?</div>
                            <div><span className='font-normal mr-1'>•</span>18:55</div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                        <div className='flex justify-left gap-2 text-sm font-bold text-gray-500'>
                            <div>You: </div>
                            <div>Hi, how are you?</div>
                            <div><span className='font-normal mr-1'>•</span>18:55</div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                        <div className='flex justify-left gap-2 text-sm font-bold text-gray-500'>
                            <div>You: </div>
                            <div>Hi, how are you?</div>
                            <div><span className='font-normal mr-1'>•</span>18:55</div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                        <div className='flex justify-left gap-2 text-sm font-bold text-gray-500'>
                            <div>You: </div>
                            <div>Hi, how are you?</div>
                            <div><span className='font-normal mr-1'>•</span>18:55</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        }

        {searchUser &&
        <div className='flex flex-col gap-6 bg-black p-4 overflow-x-scroll overflow-y-hidden relative top-[114px] pb-20'>
            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                    </div>
                </div>
            </Link>

            <Link to="/conversation/jakub">
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>Bro who pulls up</div>
                    </div>
                </div>
            </Link>
        </div>
        }
    </div>
  )
}

export default UsersPreview;