import React, { useEffect, useRef } from 'react';

const Conversation = () => {
    const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div>
        <div className='bg-gray-200 h-screen-conversation relative top-[72px] overflow-x-hidden overflow-y-scroll px-8 py-2 flex flex-col gap-3 w-full'>
            <div className='rounded-t-xl rounded-r-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-left self-start max-w-[250px]'>Hello there!</div>
            <div className='rounded-t-xl rounded-l-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-right self-end max-w-[250px]'>How've you been lately?</div>
            <div className='rounded-t-xl rounded-r-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-left self-start max-w-[250px]'>I did 10 pull ups and i feel great</div>
            <div className='rounded-t-xl rounded-r-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-left self-start max-w-[250px]'>Hello there!</div>
            <div className='rounded-t-xl rounded-l-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-right self-end max-w-[250px]'>Hello there!</div>
            <div className='rounded-t-xl rounded-l-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-right self-end max-w-[250px]'>Hello there!</div>
            <div className='rounded-t-xl rounded-l-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-right self-end max-w-[250px]'>Hello there!</div>
            <div className='rounded-t-xl rounded-l-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-right self-end max-w-[250px]'>Hello there!</div>
            <div className='rounded-t-xl rounded-l-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-right self-end max-w-[250px]'>Hello there!</div>
            <div className='rounded-t-xl rounded-l-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-right self-end max-w-[250px]'>Hello there!</div>
            <div className='rounded-t-xl rounded-l-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-right self-end max-w-[250px]'>Hello there!</div>
            <div className='rounded-t-xl rounded-l-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-right self-end max-w-[250px]'>Hello there!</div>
            <div className='rounded-t-xl rounded-l-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-right self-end max-w-[250px]'>Hello there!</div>
            <div className='rounded-t-xl rounded-l-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-right self-end max-w-[250px]'>Hello there!</div>
            <div className='rounded-t-xl rounded-l-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-right self-end max-w-[250px]'>Hello there!</div>
            <div className='rounded-t-xl rounded-l-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-right self-end max-w-[250px]'>Hello there!</div>
            <div className='rounded-t-xl rounded-l-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-right self-end max-w-[250px]'>Hello there!</div>
            <div className='rounded-t-xl rounded-l-xl text-white text-[18px] bg-blue-600 py-2 px-4 text-right self-end max-w-[250px]'>Hello there!</div>

            <div ref={bottomRef} />
        </div>
    </div>
  )
}

export default Conversation;