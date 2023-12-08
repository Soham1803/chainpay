import { PushAPI } from '@pushprotocol/restapi';
import { ethers } from 'ethers';
import { ThirdwebProvider, ThirdwebSDKProvider } from "@thirdweb-dev/react";
import { useState, useEffect } from 'react';

  const [account, setAccount] = useState("");
  const owner = '0xC53D3d82fb2ECfe0E1570B8DF4022E5A4dD46CE7';
  const [usersender, setUsersender] = useState(null);

  useEffect(() => {
    const connectToMetamask = async () => {
      try {
        const { ethereum } = window;

        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccount(accounts[0]);

        ethereum.on('accountsChanged', async (accountnew: string[]) => {
          setAccount(accountnew[0]);
        });

        const sender = await PushAPI.initialize(account, { env: 'staging' });
        setUsersender(sender);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    };

    connectToMetamask();
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const sendToReceiver = async () => {
    if (usersender) {
      try {
        await usersender.chat.send(owner, { content: "test" });
      } catch (error) {
        console.error("Error sending chat message:", error);
      }
    } else {
      console.error("PushAPI not initialized");
    }
  };

};

