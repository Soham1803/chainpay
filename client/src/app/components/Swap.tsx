import React from 'react'
import flip from '../svgs/flip'
import SwapCard from './SwapCard'

const Swap = () => {
  return (
    <div className='flex flex-col items-center jusify-evenly w-full h-4/6'>
        <div className='flex flex-row items-center justify-evenly h-4/6 w-full bg-slate-100 '>
                        
            <SwapCard from={true} />

                <img src='/images/flip-arrows.png' width={50}  />

            <SwapCard from={false} />
        </div>

        <div className='w-full h-20% flex items-center justify-center mt-2'>
            <button className='flex flex-row items-center justify-center gap-2 w-20% h-95% rounded-[50px] text-white text-sm bg-[#39A7FF]'>SWAP
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
              <path d="M1.68259 0.588808L1.68259 5.80612H0.73399C0.542213 5.80612 0.36926 5.9217 0.295744 6.09893C0.271547 6.15759 0.259689 6.21925 0.259689 6.28027C0.259689 6.40376 0.307916 6.52502 0.398663 6.61577L3.24447 9.46158C3.38013 9.59723 3.58408 9.63786 3.76129 9.56435C3.93852 9.49096 4.0541 9.31801 4.0541 9.12623V0.588808C4.0541 0.326831 3.84177 0.114507 3.5798 0.114507H2.15689C1.89492 0.114507 1.68259 0.326831 1.68259 0.588808ZM3.5798 0.588808L3.5798 9.12623L0.73399 6.28042H2.15689L2.15689 0.588808H3.5798Z" fill="white"/>
              <path d="M5.29551 0.150703C5.11827 0.224053 5.0027 0.397025 5.0027 0.588802L5.0027 9.12622C5.0027 9.3882 5.21502 9.60052 5.477 9.60052H6.89991C7.16188 9.60052 7.37421 9.3882 7.37421 9.12622V3.90891H8.32281C8.51459 3.90891 8.68754 3.79334 8.76106 3.6161C8.78525 3.55745 8.79711 3.49579 8.79711 3.43476C8.79711 3.31129 8.74888 3.19001 8.65814 3.09926L5.81233 0.253456C5.67669 0.117817 5.47274 0.0771866 5.29551 0.150703ZM8.32281 3.43461H6.89991V9.12622H5.477L5.477 0.588802L8.32281 3.43461Z" fill="white"/>
            </svg>
             </button>

        </div>
     </div>
  )
}

export default Swap