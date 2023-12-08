import React from 'react'

import cn from './utils/cn'

import ModeIndicator from './components/ModeIndicator'
import CustomerInfo from './components/CustomerInfo'

import Banner from './components/Banner';


const page = () => {


  return (
    <div className='flex flex-wrap flex-row w-full h-full'>


      {/* Left side */}
      <div className='flex flex-col h-full w-3/5 '>
        {/* // Status bar */}
        <div className='flex flex-row gap-2 items-center justify-start p-3 text-8rem font-semibold h-10% w-full '>
          <img src='/logos/chainpay-logo.png' width='37' />
          Chainpay
        </div>

        <ModeIndicator />

        <CustomerInfo />

      </div>

      {/* // Right side */}
      <Banner />

    </div>
  )
}

export default page