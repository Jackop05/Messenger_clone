import React from 'react'

const SettingsConversation = () => {
  return (
    <div className='flex flex-col gap-4 w-full text-left'>
        <div className='mb-4'>
            <div className='text-md font-bold text-gray-600 mb-2'>Customization</div>
            <div className='flex flex-col gap-3 bg-gray-900 p-4 rounded-xl'>
                <div className='w-full flex justify-start gap-3 border-b-[1px] border-gray-700 pb-3'>
                    <img className='rounded-full w-6 h-6' src="images/defaultUser.png" alt="Theme color" />
                    <div className='text-md text-white '>Theme color</div>
                </div>
                <div className='w-full flex justify-start gap-3 border-b-[1px] border-gray-700 pb-3'>
                    <img className='rounded-full w-6 h-6' src="images/defaultUser.png" alt="Theme color" />
                    <div className='text-md text-white '>Quick emoji</div>
                </div>
                <div className='w-full flex justify-start gap-3'>
                    <img className='rounded-full w-6 h-6' src="images/defaultUser.png" alt="Theme color" />
                    <div className='text-md text-white '>Nick</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SettingsConversation;