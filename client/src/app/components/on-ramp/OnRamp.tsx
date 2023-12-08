import React from 'react'

const OnRamp = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
        <div className='flex flex-row w-90% h-20% items-center justify-evenly'>
            <div className='flex flex-row items-center justify-center h-full w-40%'>
                <div className='text-black text-lg'>Pay: </div>
                <input type="text" placeholder='Amount' className='text-lg text-[#8F8F8F] font-bold px-2 rounded-[6px] border-[1px] border-black' />
            </div>
            <div className='flex flex-row items-center justify-center h-full w-40%'>
                <div className='text-black text-lg'>Receive: </div>
                <input type="text" placeholder='Amount' className='text-lg text-[#8F8F8F] font-bold px-2 rounded-[6px] border-[1px] border-black' />
            </div>
        </div>
    </div>
  )
}

export default OnRamp