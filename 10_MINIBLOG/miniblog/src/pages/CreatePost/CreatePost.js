import styles from './CreatePost.module.css'

import { useState } from 'react'

import {useNavigate} from 'react-router-dom'

import {useAuthValue} from '../../context/AuthContext'

import { useInsertDocument } from '../../hooks/useInsertDocument'

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")
  //atraves dessa const podemos ter acesso ao que foi retornado em useInsertDocument
  const {InsertDocument, response} = useInsertDocument("posts")

  //precisamos ter acesso ao usuario para que o post seja criado
  const {user} = useAuthValue()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")

    //validamos a url

    //criamos o arry de tags

    //checamos todos os valores
    InsertDocument({
      title, 
      image, 
      body, 
      tags, 
      uid: user.uid, 
      createdBy: user.displayName
    })

    //redirect home page


  }


  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que deseja compartilhar</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input type="text"
            name="title"
            required
            placeholder='Pese num bom titul....'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input type="text"
            name="image"
            required
            placeholder='Insira uma imagem que representa seu Post....'
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>

        <label>
          <span>Conteúdo:</span>
          <textarea name='body'
            required
            placeholder='Insira o conteúdo do post'
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>

        <label>
          <span>Tags:</span>
          <input type="text"
           name="tags"
            required
             placeholder='Insira as tags separadas por vírgula'
             onChange={(e) => setTags(e.target.value)}
             value = {tags}
             />
        </label>
        {!response.loading && <button className='btn'>Cadastrar</button>}
        {response.loading && (
          <button className='btn' disabled>
            Aguarde...
          </button>
        )}
        {response.error && <p className='error'>{response.error}</p>}

      </form>

    </div>
  )
}

export default CreatePost