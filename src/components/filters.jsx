import { useId } from 'react'
import { useFilters } from '../store/useFilters'

export default function Filters () {
  const setMinPages = useFilters(state => state.setMinPages)
  const minPages = useFilters(state => state.minPages)
  const setGenre = useFilters(state => state.setGenre)
  const minPagesID = useId()
  const genreID = useId()

  const handleChangeGenre = event => {
    setGenre(event.target.value)
  }

  const handleChangeMinPages = event => {
    setMinPages(event.target.value)
  }
  return (
  <aside className='filters'>
    <div>
      <label htmlFor={genreID}>Genero</label>
      <select id={genreID} onChange={handleChangeGenre}>
        <option value="all">Todos</option>
        <option value="Fantasía">Fantasía</option>
        <option value="Ciencia ficción">Ciencia ficción</option>
        <option value="Zombies">Zombies</option>
        <option value="Terror">Terror</option>
      </select>
    </div>
    <div>
      <label htmlFor={minPagesID}>Mínimo de pagina</label>
      <input id={minPagesID}
      type='range'
      onChange={handleChangeMinPages}
      min={0}
      max={1000}/>
      <label>{minPages}</label>
    </div>
  </aside>
  )
}
