import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const UsersPreview = (props) => {
    const navigate = useNavigate();
    const searchUser = props.searchUser;

    const [userData, setUserData] = useState('');
    const [newFriends, setNewFriends] = useState([]);
    const [conversationsData, setConversationsData] = useState([]);



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



    const getNewFriends = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/data/get-new-friends/${searchUser}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                }
              });


            if (!response.ok) {
                throw new Error(`Error occured while requesting for user data`);
            }

            const data = await response.json();
            setNewFriends(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
            return null;
        }
    }


    const getConversationsData = async () => {
        try {
            const queryParams = new URLSearchParams({
                username: userData.conversations,
                type: 'all'
            }).toString();


            const response = await fetch(`http://localhost:5000/api/data/get-conversation-data?${queryParams}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            const data = await response.json();
            if (response.ok) {
                setConversationsData(data);
            } else {
                console.error('Failed to fetch conversations:', data);
            }
        } catch (error) {
            console.error('Error fetching conversations:', error);
        }
    }


    useEffect(() => {
        getUserData();
    }, []);

    useEffect(() => {
        if(searchUser){
            getNewFriends()
        }
    }, [searchUser]);

    useEffect(() => {
        getConversationsData();
    }, [userData]);
    console.log('Conversations: ', conversationsData);




    let conversationArray = conversationsData?.map((conversation) => {
        const length = conversation.messages.length;
        const username = conversation.users.filter(username => username !== userData.username);
        let preMessage = conversation.messages[length-1]?.text;
        const preMessageUser = conversation.messages[length-1]?.user;
        const preMessageTime = conversation.messages[length-1]?.date.slice(11, 16);
        let preView = (conversation.users[0] === username) ? conversation.nickName[0] : conversation.nickName[1];
        preView = preView ? preView : username;

        let link = `/conversation/${username}`;
        if(conversation.groupName != 'None') {
            console.log('Group!!!')
            link = `/group/${conversation._id}`;
            preView = conversation.groupName;
        }

        let display = '';
        if(preMessage == undefined) {
            display ='hidden';
            preMessage = 'Welcome to new group!';
        }

        

        

        return (
            <Link to={link}>
                    <div className='flex gap-4'>
                        <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                        <div className='flex flex-col justify-center'>
                            <div className='text-md font-bold text-white'>{preView}</div>
                            <div className='flex justify-left gap-2 text-sm font-bold text-gray-500'>
                                <div className={`mr-[4px] ${display}`}>{preMessageUser}: </div>
                                <div>{preMessage} <span className={`font-normal mr-1  ${display}`}>•</span>{preMessageTime}</div>
                            </div>
                        </div>
                    </div>
                </Link>
        )
    })
    if(!conversationArray || conversationArray.length === 0){
        conversationArray = <div className='text-white text-lg font-bold text-center mt-4'>No conversations yet</div>
    }


    const newFriendsArray = newFriends.map((name) => {
        return (
            <Link to={`/conversation/${name}`}>
                <div className='flex gap-4'>
                    <img src="images/defaultUser.png" alt="Profile image" className='rounded-full min-w-12 w-12 min-h-12 h-12' />
                    <div className='flex flex-col justify-center'>
                        <div className='text-md font-bold text-white'>{name}</div>
                    </div>
                </div>
            </Link>
        )
    })



    return ( 
        <div className='bg-black min-h-screen'>
                {!searchUser&&
                    <div className='flex flex-col gap-6 bg-black p-4 overflow-x-auto overflow-y-hidden relative top-[114px] pb-20'>
                        {conversationArray}
                    </div>
                }
                {searchUser &&
                    <div className='flex flex-col gap-6 bg-black p-4 overflow-x-auto overflow-y-hidden relative top-[114px] pb-20'>
                        {newFriendsArray}
                    </div>
                }
        </div>
    )
}

export default UsersPreview;