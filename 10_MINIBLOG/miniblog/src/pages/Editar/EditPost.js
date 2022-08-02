import styles from './EditPost.module.css'

import { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { useAuthValue } from '../../context/AuthContext'

import { useUpdateDocument } from '../../hooks/useUpdateDocument'

import { useFetchDocument } from '../../hooks/useFetchDocument'

const EditPost = () => {
  //UseParams retorna um objeto com os dados que vieram da URL
  const { id } = useParams()
  const { document: post } = useFetchDocument("posts", id)

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")
  //atraves dessa const podemos ter acesso ao que foi retornado em useInsertDocument

  useEffect(() => {
    if (post) {
      setTitle(post.title)
      setBody(post.body)
      setImage(post.image)
      //temos que transformar o array de tags em um texto para que possamos mostra-lo e altera-lo
      const textTags = post.tagsArray.join(", ")
      setTags(textTags)
    }
  }, [post])
  const navigate = useNavigate()

  //precisamos ter acesso ao usuario para que o post seja eeditado
  const { user } = useAuthValue()

  const { updateDocument, response } = useUpdateDocument("posts")

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")

    //validamos a url
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
    }

    //criamos o arry de tags, damos split na vírgula e eliminamos todos os espaços
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())


    //checamos todos os valores
    if (!title || !image || !tags || !body) {
      setFormError("Por Favor preencha todos os campos.")
    }


    if (formError) return

    const data = {
      title,
      image,
      body,
      tagsArray,
    }

    updateDocument(id, data)

    //redirect home page
    navigate("/dashboard")

  }


  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h2>Editando Post: {post.title}</h2>
          <p>Altere os dados como desejar</p>
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
              <p className={styles.preview_title}>Preview da Imagem atual:</p>
              <img 
              className={styles.image_preview}
              src= {post.image}
              alt= {post.title}
              /> 
              
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
                value={tags}
              />
            </label>
            {!response.loading && <button className='btn'>Editar</button>}
            {response.loading && (
              <button className='btn' disabled>
                Aguarde...
              </button>
            )}
            {response.error && <p className='error'>{response.error}</p>}
            {formError && <p className='error'>{formError}</p>}
          </form>
        </>
      )}

    </div>
  )
}

export default EditPost