import { create } from 'zustand';

export const useCryptoStore = create((set) => ({
    search: '',
    setSearch: (search) => set({ search }),
}));
