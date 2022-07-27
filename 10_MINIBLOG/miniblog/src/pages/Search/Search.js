import React from 'react'

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'

const Search = () => {
    const query = useQuery()
    //get é um metodo do searchParams
    const search = query.get("q")
    
  return (
    <div>
        <h2>Search</h2>
        <p>{search}</p>
    </div>
  )
}

export default Search