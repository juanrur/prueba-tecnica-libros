import { useBooks } from '../store/useBooks'

export default function Book ({ bookData }) {
  const { cover, title } = bookData

  const listOfRead = useBooks(state => state.listOfRead)
  const changeBookOfLOR = useBooks(state => state.changeBookOfLOR)

  const inLOR = Boolean(listOfRead.find(({ book }) => book.title === title))

  return <li className="book">
    <button
    onClick={() => changeBookOfLOR(title)}
    className='add-read-list'>
      {inLOR ? '-' : '+'}
    </button>

    <img style={inLOR ? { filter: 'brightness(50%)' } : {}} src={cover}></img>

  </li>
}
