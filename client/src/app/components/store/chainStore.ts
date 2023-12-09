import {create} from 'zustand';

export const useChainStore = create((set) => ({
  
    mode: 0,
    setMode: (mode: number) => set({mode}),

    amount: 0,
    setAmount: (amount: number) => set({amount}),

    address: '',
    setAddress: (address: string) => set({address}),
}));
