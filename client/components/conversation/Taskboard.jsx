import React, { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import { useParams } from 'react-router-dom';



const Taskboard = () => {
  const [message, setMessage] = useState('');
  const { otherUsername } = useParams();

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



  return (
    <div className='bg-black p-4 w-screen fixed bottom-0 flex justify-between gap-4'>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Aa' className='rounded-3xl w-full py-2 px-6 outline-none text-lg' />
        <AiOutlineSend className='text-blue-600 text-[40px] self-align-center' onClick={onSendClick} />
        <div className='text-3xl cursor-pointer'>😁</div>
    </div>
  )
}

export default Taskboard