import styles from './Dashboard.module.css'

import { Link } from 'react-router-dom'

//hooks
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Dashboard = () => {
  const { user } = useAuthValue()
  const uid = user.uid

  const { documents: posts, loading } = useFetchDocuments('posts', null, uid)

  const deleteDocument = (id) => {
  }
  if(loading){
    return <p>Carregando....</p>
  }
  //posts do usuario


  return (

    <div className={styles.dashboard}>
      <h2>Dashboard</h2>

      <p>Gerencie seus posts</p>

      {posts && posts.length === 0 ? (

        <div className={styles.noposts}>
          <p>Não encontramos Posts</p>
          <Link to="/posts/create" className='btn'>
            Criar primeiro Post
          </Link>
        </div>

      ) : (
        <div className={styles.post_header}>
          <span>Título: </span>
          <span>Ações: </span>
        </div>
      )}

      {posts &&
        posts.map((post) =>

          <div key={post.id} className={styles.post_row}>
            <p>{post.title}</p>
            <div>

              <Link to={`/posts/${post.id}`} className='btn btn-outline'>
                Ver
              </Link>
              <Link to={`/posts/edit/${post.id}`} className='btn btn-outline'>
                Editar
              </Link>
              <button onClick={() => deleteDocument(post.id)} className='btn btn-outline btn-danger'>
                Excluir
              </button>
            </div>
            
          </div>
        )}
    </div>
  )
}

export default Dashboard