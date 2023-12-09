"use client"
import { useState, useEffect } from 'react'
import {
  AuthKitSignInData,
  SafeAuthInitOptions,
  SafeAuthPack,
  SafeAuthUserInfo
} from '@safe-global/auth-kit'
import {EthHashInfo} from '@safe-global/safe-react-components'
import Safe, {EthersAdapter} from '@safe-global/protocol-kit'
import {ethers, BrowserProvider, Eip1193Provider} from 'ethers';
import { getSafeTxV4TypedData, getTypedData, getV3TypedData } from './typedData'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import {createTheme} from '@mui/system';
import React from 'react'

import cn from './utils/cn'

import ModeIndicator from './components/ModeIndicator'
import CustomerInfo from './components/CustomerInfo'

import { Carousel, Image } from 'antd';
import Banner from './components/Banner';

const page = () => {

  const [safeAuthPack, setSafeAuthPack] = useState<SafeAuthPack>()
  const [isAuthenticated, setIsAuthenticated] = useState(!!safeAuthPack?.isAuthenticated)
  const [safeAuthSignInResponse, setSafeAuthSignInResponse] = useState<AuthKitSignInData | null>(
    null
  )
  const [userInfo, setUserInfo] = useState<SafeAuthUserInfo | null>(null)
  const [chainId, setChainId] = useState<string>()
  const [balance, setBalance] = useState<string>()
  const [consoleMessage, setConsoleMessage] = useState<string>('')
  const [consoleTitle, setConsoleTitle] = useState<string>('')
  const [provider, setProvider] = useState<BrowserProvider>()

  useEffect(() => {
    // @ts-expect-error - Missing globals
    const params = new URL(window.document.location).searchParams
    const chainId = params.get('chainId');

    (async () => {
      const options: SafeAuthInitOptions = {
        enableLogging: true,
        buildEnv: 'production',
        chainConfig: {
          chainId: chainId || '0x64',
          rpcTarget: 'https://gnosis.drpc.org'
        }
      }
     

      const authPack = new SafeAuthPack()

      await authPack.init(options)

      console.log('safeAuthPack:safeEmbed', authPack.safeAuthEmbed)

      setSafeAuthPack(authPack)

      authPack.subscribe('accountsChanged', async (accounts) => {
        console.log('safeAuthPack:accountsChanged', accounts, authPack.isAuthenticated)
        if (authPack.isAuthenticated) {
          const signInInfo = await authPack?.signIn()

          setSafeAuthSignInResponse(signInInfo)
          setIsAuthenticated(true)
        }
      })

      authPack.subscribe('chainChanged', (eventData) =>
        console.log('safeAuthPack:chainChanged', eventData)
      )
    })()
  }, [])

  useEffect(()=> {
    if(!safeAuthPack || !isAuthenticated) return;
    (async () => {
      const web3Provider = safeAuthPack.getProvider()
      const userInfo = await safeAuthPack.getUserInfo()

      setUserInfo(userInfo)

      if (web3Provider) {
        const provider = new BrowserProvider(safeAuthPack.getProvider() as Eip1193Provider)
        const signer = await provider.getSigner()
        const signerAddress = await signer.getAddress()

        setChainId((await provider?.getNetwork()).chainId.toString())
        setBalance(
          ethers.formatEther((await provider.getBalance(signerAddress)) as ethers.BigNumberish)
        )
        setProvider(provider)
      }
    })()
}, [isAuthenticated])

const login = async() => {
  const signInInfo = await safeAuthPack?.signIn()

  if (signInInfo) {
    setSafeAuthSignInResponse(signInInfo)
  } else {
    setSafeAuthSignInResponse(null)
  }
  setIsAuthenticated(true)
}

const logout = async () => {
  await safeAuthPack?.signOut()

  setSafeAuthSignInResponse(null)
}


  return (
    <div className='flex flex-wrap flex-row w-full h-full'>


      {/* Left side */}
      <div className='flex flex-col h-full w-3/5 '>
        {/* // Status bar */}
        <div className='flex flex-row gap-2 items-center justify-start p-3 text-8rem font-semibold h-10% w-full '>
          <img src='/logos/chainpay-logo.png' width='37' />
          Chainpay

          <div>
            <Button onClick={login}>Login</Button>
            <Button onClick={logout}>Logout</Button>
          </div>
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