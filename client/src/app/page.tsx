import React from 'react'

const page = () => {
  return (
    <div className='flex flex-wrap flex-row w-full h-full'>

      <div className='flex flex-col h-full w-3/5 bg-slate-500'>
        <div className='flex flex-row gap-2 items-center justify-start p-3 text-8rem font-semibold h-10% w-full bg-slate-200'>
          <img src='/logos/chainpay_logo.png' width='37' />
          Chainpay
        </div>
      </div>

      <div className='flex flex-col h-full w-2/5'></div>

    </div>
  )
}

export default page