import {create} from 'zustand';

export const useChainStore = create((set) => ({
  
    mode: 0,
    setMode: (mode: number) => set({mode}),
}));
