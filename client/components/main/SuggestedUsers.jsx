import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const SuggestedUsers = (props) => {
  const display = !props.searchUser;

  const [userData, setUserData] = useState('');

  const getUserData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data/get-user-data', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        navigate('/login');
        throw new Error('Error occurred while requesting user data');
      }

      const data = await response.json();
      setUserData(data.userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const usedIndices = new Set();
  let suggestedArray = [];
  while (suggestedArray.length < 10 && suggestedArray.length < userData?.friendsIdList?.length) {
    const randomIndex = Math.floor(Math.random() * userData?.friendsIdList?.length);

    // Ensure we do not pick the same index more than once
    if (!usedIndices.has(randomIndex)) {
      suggestedArray.push(userData?.friendsIdList[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  suggestedArray = suggestedArray.map((name) => {
    return (
      <Link to={`/conversation/${name}`} key={name} className='flex flex-col items-center'>
        <img src="images/defaultUser.png" alt="Profile image" className='rounded-full w-12 h-12 sm:w-16 sm:h-16 mb-1' />
        <div className='text-white text-center text-xs sm:text-sm'>{name}</div>
      </Link>
    );
  });

  return (
    <div>
      {display && (
        <div className='flex bg-black p-4 gap-4 overflow-x-auto relative top-[115px]'>
          {suggestedArray}
        </div>
      )}
    </div>
  );
};

export default SuggestedUsers;
