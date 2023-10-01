import Filters from './filters'
import { useBooks } from '../store/useBooks'
import { books } from '../data/books'

export default function Header ({ setLORActive }) {
  const listOfRead = useBooks(state => state.listOfRead)

  return (
  <header>
    <h1 className='title'>librería</h1>
    <h2>{`${books.library.length - listOfRead.length} libros disponible`}</h2>
    <h3>{`${listOfRead.length} en la lista de lectura`}</h3>

    <Filters />
    <button
    onClick={() => setLORActive(value => !value)}>
      <img alt="Menu" src="https://assets-cdn.123rf.com/ui-components/assets/svg/menu.svg"></img>
    </button>

  </header>
  )
}
