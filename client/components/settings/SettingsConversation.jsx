import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SettingsConversation = () => {
  const { otherUsername } = useParams ();
  const [nickName, setNickName] = useState('');
  const [quickEmoji, setQuickEmoji] = useState('');
  const [themeColor, setThemeColor] = useState('');
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [isEditingQuickEmoji, setIsEditingQuickEmoji] = useState(false);
  const [isEditingThemeColor, setIsEditingThemeColor] = useState(false);
  const [userData, setUserData] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  const getUserData = async () => {
      try {
          const response = await fetch('http://localhost:5000/api/data/get-user-data', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              },
              credentials: 'include'
          });


          if (!response.ok) {
              navigate('/login');
              throw new Error(`Error occured while requesting for user data`);
          }

          const data = await response.json();
          setUserData(data.userData);
      } catch (error) {
          console.error('Error fetching user data:', error);
          return null;
      }
  }

  useEffect(() => {
    getUserData();
  }, []);

  const handleSave = async () => {
    const username = userData.username;
    console.log('all: ',  nickName, quickEmoji, themeColor, username, otherUsername )

    const data = { nickName, quickEmoji, themeColor, username, otherUsername };

    try {
      const response = await fetch('http://localhost:5000/api/conversations/update-conversation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update settings.');
      }

      const result = await response.json();
      setSuccess('Settings updated successfully.');
      setError(null);
    } catch (err) {
      setError(err.message);
      setSuccess(null);
    }
  };

  return (
    <div className='flex flex-col gap-4 w-full text-left'>
      <div className='mb-4'>
        <div className='text-md font-bold text-gray-600 mb-2'>Customization</div>
        <div className='flex flex-col gap-3 bg-gray-900 p-4 rounded-xl'>
          <div className='w-full flex justify-start gap-3 border-b-[1px] border-gray-700 pb-3 '>
            <img className='rounded-full w-6 h-6' src="images/defaultUser.png" alt="Quick emoji" />
            <div className='text-md text-white'>Quick emoji</div>
            {isEditingQuickEmoji ? (
              <select
                  value={quickEmoji}
                  onChange={(e) => setQuickEmoji(e.target.value)}
                  className='ml-2 bg-gray-800 text-white p-1 rounded max-w-[170px]'
                >
                  <option value="😀">😀</option>
                  <option value="😁">😁</option>
                  <option value="😂">😂</option>
                  <option value="🤣">🤣</option>
                  <option value="😃">😃</option>
                  <option value="😄">😄</option>
                  <option value="😅">😅</option>
                  <option value="😆">😆</option>
                  <option value="😉">😉</option>
                  <option value="😊">😊</option>
                </select>
              ) : (
                <div className='ml-2'>{quickEmoji || ''}</div>
              )}
              <button
                onClick={() => setIsEditingQuickEmoji(!isEditingQuickEmoji)}
                className='text-blue-500'
              >
                {isEditingQuickEmoji ? 'Cancel' : 'Edit'}
              </button>
          </div>
          <div className='w-full flex justify-start gap-3'>
            <img className='rounded-full w-6 h-6' src="images/defaultUser.png" alt="Nickname" />
            <div className='text-md text-white'>Nickname</div>
            {isEditingNickname ? (
              <input
                type='text'
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
                className='ml-2 bg-gray-800 text-white p-1 rounded max-w-[140px]'
                placeholder='Enter nickname'
              />
            ) : (
              <div className='ml-2'>{nickName || ''}</div>
            )}
            <button
              onClick={() => setIsEditingNickname(!isEditingNickname)}
              className='text-blue-500'
            >
              {isEditingNickname ? 'Cancel' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
      {error && <div className='text-red-500'>{error}</div>}
      {success && <div className='text-green-500'>{success}</div>}
      {(isEditingNickname || isEditingQuickEmoji || isEditingThemeColor) && (
        <button
          onClick={handleSave}
          className='bg-blue-500 text-white py-2 px-4 rounded'
        >
          Save Changes
        </button>
      )}
    </div>
  );
};

export default SettingsConversation;
