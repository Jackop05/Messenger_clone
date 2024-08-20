import React, { useState, useEffect } from 'react';
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

    const getNewFriends = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/data/get-new-friends/${searchUser}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error occurred while requesting user data');
            }

            const data = await response.json();
            setNewFriends(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
            return null;
        }
    };

    const getConversationsData = async () => {
        try {
            const queryParams = new URLSearchParams({
                username: userData.conversations,
                type: 'all',
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
    };

    useEffect(() => {
        getUserData();
    }, []);

    useEffect(() => {
        if (searchUser) {
            getNewFriends();
        }
    }, [searchUser]);

    useEffect(() => {
        if (userData) {
            getConversationsData();
        }
    }, [userData]);

    const truncateMessage = (message, maxLength) => {
        if (message.length > maxLength) {
            return `${message.slice(0, maxLength)}...`;
        }
        return message;
    };

    let conversationArray = conversationsData?.map((conversation) => {
        const length = conversation.messages.length;
        const username = conversation.users.filter((user) => user !== userData.username);
        let preMessage = conversation.messages[length - 1]?.text || 'Welcome to the new group!';
        const preMessageUser = conversation.messages[length - 1]?.user;
        const preMessageTime = conversation.messages[length - 1]?.date.slice(11, 16);
        let preView = conversation.users[0] === username ? conversation.nickName[0] : conversation.nickName[1];
        preView = preView || username;

        let link = `/conversation/${username}`;
        if (conversation.groupName !== 'None') {
            link = `/group/${conversation._id}`;
            preView = conversation.groupName;
        }

        preMessage = truncateMessage(preMessage, 40);

        return (
            <Link to={link} key={conversation._id} className="flex gap-4">
                <img src="images/defaultUser.png" alt="Profile image" className="rounded-full w-12 h-12 sm:w-16 sm:h-16" />
                <div className="flex flex-col justify-center">
                    <div className="text-md font-bold text-white">{preView}</div>
                    <div className="flex gap-2 text-sm font-bold text-gray-500">
                        <div>{preMessageUser ? `${preMessageUser}: ` : ''}</div>
                        <div>
                            {preMessage} <span className="font-normal mx-1">•</span>{preMessageTime}
                        </div>
                    </div>
                </div>
            </Link>
        );
    });

    if (!conversationArray || conversationArray.length === 0) {
        conversationArray = (
            <div className="text-white text-lg font-bold text-center mt-4">No conversations yet</div>
        );
    }

    const newFriendsArray = newFriends.map((name) => (
        <Link to={`/conversation/${name}`} key={name} className="flex gap-4">
            <img src="images/defaultUser.png" alt="Profile image" className="rounded-full w-12 h-12 sm:w-16 sm:h-16" />
            <div className="flex flex-col justify-center">
                <div className="text-md font-bold text-white">{name}</div>
            </div>
        </Link>
    ));

    return (
        <div className="bg-black min-h-screen">
            {!searchUser && (
                <div className="flex flex-col gap-6 bg-black p-4 overflow-y-auto relative top-[114px] pb-20">
                    {conversationArray}
                </div>
            )}
            {searchUser && (
                <div className="flex flex-col gap-6 bg-black p-4 overflow-y-auto relative top-[114px] pb-20">
                    {newFriendsArray}
                </div>
            )}
        </div>
    );
};

export default UsersPreview;
