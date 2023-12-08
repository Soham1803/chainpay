'use client'
import { readFileSync } from 'fs'
import React from 'react'
import PhoneNoCodes from './PhoneNoCodes'

import { Radio } from 'antd';
import SwapCard from './SwapCard';

import swap_button from '../svgs/flip';
import Swap from './Swap';


const CustomerInfo = () => {

    const actionModes = ['swap', 'pay', 'onramp', 'message'];

    const [actionMode , setActionMode] = React.useState(0);

    const onChange = (e: any) => {
        setActionMode(e.target.value);
        console.log(actionMode);
        console.log(actionModes[actionMode]);
    }

    return (


        <div className='flex flex-col items-center justify-evenly w-full h-70% bg-slate-200 px-12 py-2'>
            <div className='flex flex-row items-start justify-start w-90% mb-4 text-[#505050] text-sm' >Customer Information</div>

            <div className=' grid grid-cols-1 divide-y px-4 divide-[#8F8F8F] w-90% h-2/5 border-[1px] border-[#8F8F8F] rounded-[5px]'>

                {/* UserName */}
                <div className='flex flex-row items-center justify-start text-sm font-semibold px-2 py-0'>
                    Yash Thipsay
                </div>
                {/* Contacts */}
                <div className='flex flex-row justify-evenly items-center'>
                    <div className='h-auto w-5/12 flex flex-row items-center justify-start'>
                        <PhoneNoCodes />
                        <div className='text-sm font-semibold ml-24 '>808769****</div>
                    </div>

                    <div className='h-auto w-5/12 flex flex-row items-center justify-start text-sm font-semibold'>
                        yashthipsay@exp.com
                    </div>
                </div>

                {/* Chain */}
                <div className='flex flex-row justify-start items-center'>
                    <div className='h-auto w-5% flex flex-row items-center justify-start text-sm font-semibold'>
                        <img src='https://www.vhv.rs/dpng/d/420-4206472_fork-cryptocurrency-ethereum-bitcoin-classic-png-download-ethereum.png' width='25' />
                    </div>
                    <div className='text-sm font-semibold ml-1'>Etherium</div>
                </div>
                {/* Eth address */}
                <div className='flex items-center justify-start text-sm font-semibold'>
                0xb794f5ea0ba39494ce839613fffba74279579268
                </div>
                {/* country */}
                <div className='flex flex-row items-center justify-start'> 
                    <textarea  placeholder='Address' className='h-[25px] w-90% flex items-center justify-start text-sm ml-1 px-2 rounded-[5px]' />
                </div>

            </div>

            <div className='flex flex-col items-center justify-between w-90% gap-2 h-2/5 border-[1px] border-[#8F8F8F] rounded-[5px]'>
                <div className='flex justify-center w-95% h-20% '>
                    <Radio.Group size='large' onChange={onChange} defaultValue='0'>
                      <Radio.Button style={{width: 175, textAlign: 'center'}} value="0">SWAP</Radio.Button>
                      <Radio.Button style={{width: 175, textAlign: 'center'}} value="1">PAY</Radio.Button>
                      <Radio.Button style={{width: 175, textAlign: 'center'}} value="2">ON-RAMP</Radio.Button>
                      <Radio.Button style={{width: 175, textAlign: 'center'}} value="3">MESSAGE</Radio.Button>
                    </Radio.Group>
                </div>

                <Swap />
            </div>

        </div>
    )
}

export default CustomerInfo