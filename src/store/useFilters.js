import { create } from 'zustand'

export const useFilters = create((set) => ({
  genre: 'all',
  minPages: 0,
  setMinPages: minPages => set(() => ({ minPages })),
  setGenre: genre => set(() => ({ genre }))
}))
