import { useEffect, useState, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }

    if (search.startsWith(' ')) return
    setSearch(search)

    if (search.length === 0) {
      setError('You cant search a empty movie')
      return
    }

    if (search.length <= 3) {
      setError('You need more than 3 characters to search a movie')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}
