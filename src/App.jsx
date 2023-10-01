import './App.css'
import { useState } from 'react'
import Header from './components/header.jsx'
import { useBooks } from './store/useBooks'
import { books as initialBooks } from './data/books.js'
import ListOfBooks from './components/listOfBooks'
import { useFilters } from './store/useFilters'

function App () {
  const listOfRead = useBooks(state => state.listOfRead)
  const changeBookOfLOR = useBooks(state => state.changeBookOfLOR)
  const filterGenre = useFilters(state => state.genre)
  const filterMinPages = useFilters(state => state.minPages)

  // LOR = List Of Read
  const [LORActive, setLORActive] = useState(false)

  const filterBooks = books => {
    const booksByGenre = filterGenre === 'all' ? books : books.filter(({ book }) => book.genre === filterGenre)
    return booksByGenre.filter(({ book }) => book.pages >= filterMinPages)
  }

  const filteredBooks = filterBooks(initialBooks.library)

  return (
    <main>
      <Header setLORActive={setLORActive} />

      <section>
        <ul className='library'>
          <ListOfBooks
          books={filteredBooks}
          />
        </ul>

        {LORActive &&
          <ul className='list-of-read'>
            {listOfRead.map(({ book }) => (
              <div key={book.ISBN}>
                <img className='book' src={book.cover} />
                <button onClick={() => changeBookOfLOR(book.title)}>-</button>
              </div>
            ))}
          </ul>
        }
      </section>
    </main>
  )
}

export default App
