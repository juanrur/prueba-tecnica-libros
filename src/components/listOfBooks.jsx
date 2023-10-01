import Book from './book'

export default function ListOfBooks ({ books }) {
  return books.map(({ book }) => (
    <Book key={book.ISBN}
    bookData={book}
  />
  ))
}
