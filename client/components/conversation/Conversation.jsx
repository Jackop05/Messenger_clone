import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineSend } from 'react-icons/ai';
import { FaAngleLeft, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Conversation = () => {
    const bottomRef = useRef(null);
    const { otherUsername, groupId } = useParams();
    const [conversationData, setConversationsData] = useState();
    const [message, setMessage] = useState('');
    console.log('otherUsername: ', otherUsername);
     


    const getConversationsData = async () => {
      if(otherUsername != undefined){
          try {
            const queryParams = new URLSearchParams({
                username: otherUsername,
                type: 'conversation'
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
                setConversationsData(data[0]);
            } else {
                console.error('Failed to fetch conversations:', data);
            }
        } catch (error) {
            console.error('Error fetching conversations:', error);
        }
      } else {
          try {
            const queryParams = new URLSearchParams({
                groupId: groupId,
                type: 'group'
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
                setConversationsData(data[0]);
            } else {
                console.error('Failed to fetch conversations:', data);
            }
        } catch (error) {
            console.error('Error fetching conversations:', error);
        }
      }
  }

  const onSendClick = async () => {
    try {
        const response = await fetch(`http://localhost:5000/api/messages/post-messages/${otherUsername}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // This ensures cookies are sent with the request
            body: JSON.stringify({ text: message }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Message sent successfully:', data.newMessage);
            setMessage(''); // Clear the input field after sending
        } else {
            console.error('Failed to send message:', data);
        }

    } catch (error) {
        console.error('Error sending message:', error);
    }
  };

  const onSendClickEmote = async () => {
    try {
        const response = await fetch(`http://localhost:5000/api/messages/post-messages/${otherUsername}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // This ensures cookies are sent with the request
            body: JSON.stringify({ text: conversationData?.quickEmoji }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Message sent successfully:', data.newMessage);
            setMessage(''); // Clear the input field after sending
        } else {
            console.error('Failed to send message:', data);
        }

    } catch (error) {
        console.error('Error sending message:', error);
    }
  };


  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversationData]);

  useEffect(() => {
    getConversationsData();
    const intervalId = setInterval(getConversationsData, 1000); // Fetch data every 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);


  console.log('Conversations: ', conversationData)

  let messagesArray = conversationData?.messages?.map((message) => {
    const style = (otherUsername === message.user) ? "text-left rounded-t-xl rounded-r-xl self-start bg-gray-500" : "rounded-t-xl rounded-l-xl text-right self-end bg-blue-600";

    return (
      <div className={`text-white text-[18px] py-2 px-4 max-w-[250px] ${style}`}>{message.text}</div>
    )
  })
  if(!messagesArray) {
    messagesArray = (<div className='text-black text-xl font-bold text-center mt-8'>Welcome to the conversation!</div>)
  }

  let nickname = '';
  nickname = (conversationData?.users[0] === otherUsername) ? conversationData?.nickName[0] : conversationData?.nickName[1];
  nickname = nickname ? nickname : otherUsername;
  
  useEffect(() => {
    nickname = (conversationData?.users[0] === otherUsername) ? conversationData?.nickName[0] : conversationData?.nickName[1];
    nickname = nickname ? nickname : otherUsername;
    

  }, [conversationData])

  

  return (
    <div>
        <div className='bg-black p-4 fixed w-full top-0 z-50 flex justify-between items-center'>
          <div className="flex justify-center gap-2 items-center">
            <Link to="/"><FaAngleLeft className='text-white w-8 h-8  ' /></Link>
            <img src="images/defaultUser.png" alt="Profile image" className='rounded-full text-white w-10 h-10' />
            <div className='text-white text-lg'>{(conversationData?.groupName == 'None') ? nickname : conversationData?.groupName}</div>
          </div>
          <Link to={`/conversation/settings/${otherUsername}`}><FaBars className="text-white w-6 h-6" /></Link>

        </div>  
        <div>
            <div className='bg-gray-200 h-screen-conversation relative top-[72px] overflow-x-hidden overflow-y-scroll px-8 py-2 flex flex-col gap-3 w-full'>
                {messagesArray}
                <div ref={bottomRef} />
            </div>
            <div className='bg-black p-4 w-screen fixed bottom-0 flex justify-between gap-4'>
              <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Aa' className='rounded-3xl w-full py-2 px-6 outline-none text-lg' />
              <AiOutlineSend className='text-blue-600 text-[40px] self-align-center' onClick={onSendClick} />
              <div className='text-3xl cursor-pointer text-white' onClick={onSendClickEmote}>{conversationData?.quickEmoji}</div>
          </div>
      </div>
    </div>

  )
}

export default Conversation;