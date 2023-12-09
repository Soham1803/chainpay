import React from 'react'

import { Carousel, Image } from 'antd';

const Banner = () => {
  return (
    
    <div className='flex flex-col h-full items-center justify-around w-2/5 bg-[#87C4FF78]'>
        <div className='flex flex-col h-1/2 items-center justify-center w-full'>
          <img src="/logos/chainpay-logo.png" width={120} alt="chainpay" />
          <div className='text-3xl mt-2 font-bold text-black'>ChainPay</div>
          <div className='text-lg mt-5 text-black'>Your Preferred <span className='font-semibold'>Currency</span>, Your Seamless <span className='font-semibold'>Trade</span></div>
        </div>

        <div className='flex flex-col h-1/2 items-center justify-center w-full'>
          <div className='h-10% text-lg text-black'>Powered by</div>
          <div className='h-70%'>
          <Carousel autoplay>
          
             <Image src="/logos/push.png" width={10} alt="" />
          
          
             {/* <img src="" alt="" />
        
          
             <img src="" alt="" />
        
          
             <img src="" alt="" /> */}
          
         </Carousel>
          </div>
        </div>
      </div>
  )
}

export default Banner