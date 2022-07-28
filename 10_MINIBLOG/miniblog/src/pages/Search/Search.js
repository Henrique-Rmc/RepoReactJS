import React from 'react'


//components
import PostDetail from '../../components/PostDetail'

import { Link } from 'react-router-dom'

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'

const Search = () => {
    const query = useQuery()
    //get é um metodo do searchParams
    const search = query.get("q")

    const {documents: posts} = useFetchDocuments("posts", search)
    
  return (
    <div>
        <h2>Search</h2>
        <div>
          {posts && posts.length === 0 && (
            <>
            <p>Não foram encontrados posts a partir da sua busca</p>
            <Link to="/" cçassname="btn btn-dark">
              Voltar
            </Link>
            </>
          )}
          {posts && posts.map((post) =><PostDetail key ={post.id} post = {post} />)}
          
        </div>
    </div>
  )
}

export default Search