import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

export function HomePage() {
  const {isLoading, isError, data} = useSearchUsersQuery('AstroGastro')
  return (
    <div>HomePage</div>
  )
}
