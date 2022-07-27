import styles from './PostDetail.module.css'

import { Link } from 'react-router-dom'

//PostDetail é um componente de interface detalhada do Post.
//É usado no Home para mostrar cada post detalhadamente

const PostDetail = ({post}) => {
  return (
    <div className={styles.detail}>
        {/*post.title serve como atributo para acesso a imagem*/}
        <img src={post.image} alt = {post.title}/>
        <h2>{post.title}</h2>
        <p className={styles.createdBy}>{post.createdBy}</p>
        <div className={styles.tags}>
        {post.tagsArray.map((tag)=> (
            <p key = {tag}><span>#</span>{tag}</p>
        ))}
        </div>
        <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ler</Link>
    </div>
  )
}

export default PostDetail