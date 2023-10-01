import { beforeEach, describe, expect, it, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import { useBooks } from './appContext'

function ConsumerUseBooks () {
  const library = useBooks(state => state.library)
  return <>
  <span role='library'>{library.length}</span>
  </>
}

describe('books', () => {
  afterEach(cleanup)

  beforeEach(() => {
    render(<ConsumerUseBooks />)
  })

  it('should return some', () => {
    expect(screen.getByRole('library')).toBeDefined()
  })

  it('library length should be 13', () => {
    expect(screen.getByRole('library').innerHTML).toBe('13')
  })
})
