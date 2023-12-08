import React from 'react'

const Pay = () => {
  return (
    <div className='flex flex-col items-center justify-evenly w-full h-4/6'>
       <div className='flex flex-row h-20% w-80% items-center justify-center gap-4'>
            <div className='text-black text-lg'>The Amount to be Paid: </div>
            <input type="text" placeholder='Amount' className='text-lg text-[#8F8F8F] font-bold px-2 rounded-[6px] border-[1px] border-black' />
        </div> 

        <div className='flex flex-row h-20% w-80% items-center justify-center'>
            <input type="text" placeholder='Enter Etherium address' className='text-black px-2 py-1 rounded-[6px] border-[1px] border-black w-full' />
        </div>

        <div className='flex flex-row h-20% w-80% items-center justify-center'>
            <button className='flex items-center justify-center  w-30% rounded-[50px] h-full font-bold text-white bg-[#39A7FF] cursor-pointer'>PAY</button>
        </div>
    </div>
  )
}

export default Pay