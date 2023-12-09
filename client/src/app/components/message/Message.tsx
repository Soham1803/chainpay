import React from 'react'

const Message = () => {
  return (
    <div className='w-full h-full flex flex-col items-center '>
        <div className='flex items-center justify-center w-80% h-70% overflow-y-scroll'>
            {/* Array(5).fill(0).map((_, i) => {return(<div className='flex flex-col items-start justify-start w-full h-20%'></div>w)}) */}
        </div>

        <div className='flex items-center justify-between w-80% h-25% rounded-[6px] bg-[#87C4FF78] px-4'> 
            <input type="text" placeholder='Type a Message!' className='w-70% h-full p-1 px-3 rounded-[6px] bg-transparent' />
            <div className='h-[32px] w-[32px] flex items-center justify-center cursor-pointer rounded-full hover:bg-[#5a84ae78] '>
                <img src="/icons/send.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Message