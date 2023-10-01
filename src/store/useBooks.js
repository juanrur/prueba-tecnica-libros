import { books } from '../data/books.js'
import { create } from 'zustand'

export const useBooks = create((set) => ({
  listOfRead: JSON.parse(localStorage.getItem('listOfRead')) || [],
  changeBookOfLOR: title => set((state) => handlerChangeBookOfLOR(state, title))
}))

const handlerChangeBookOfLOR = (state, title) => {

  const inListOfRead = Boolean(state.listOfRead.find(book => book.book.title === title))
  const newListOfRead = [...state.listOfRead]

  if (inListOfRead) {
    const indexBook = state.listOfRead.findIndex(book => book.book.title === title)
    newListOfRead.splice(indexBook, 1)
  } else {
    const book = books.library.find(({ book }) => book.title === title)
    newListOfRead.push(book)
  }

  localStorage.setItem('listOfRead', JSON.stringify(newListOfRead))

  return {
    listOfRead: newListOfRead
  }
}
