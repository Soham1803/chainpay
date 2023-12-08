import React from 'react'

import { readFileSync } from 'fs'
import { Dropdown, Select } from 'antd';
import { phoneCodes } from '../data/ph_no_area_code';

const PhoneNoCodes = () => {

    type PhoneNoCodes = {
        name: string,
        dial_code: string,
        code: string
    }



    const phoneNoCodes = phoneCodes;

    return (
        <div className='relative w-[25px] h-[25px]'>
            <Select defaultValue="+91" style={{ width: 100, fontWeight: 600 }} bordered={false}>
                {phoneNoCodes.map((code: PhoneNoCodes) => (
                    <Select.Option value={code.code}>{code.dial_code} <span className='text-sm font-semibold' >{code.code}</span> </Select.Option>
                ))}
            </Select>
        </div>
    )
}

export default PhoneNoCodes