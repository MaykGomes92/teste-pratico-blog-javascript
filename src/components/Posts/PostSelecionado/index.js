import React from 'react'
import { motion } from 'framer-motion'
import './style.scss'
import { UsersGlobalContext } from '../../../Hooks/ContextUsers';
import imagePost from '../../../assets/background-tecnologia.jpg';
import { SlClose } from 'react-icons/sl'
import {POSTS,POST_COMMENTS} from '../../../API.js'


function Index({ idPost, setAbrirModal, abrirModal }) {
  const { listaApi } = React.useContext(UsersGlobalContext);
  const [listaPosts, setListaPosts] = React.useState()

  const [commentsPostSelecionado, setCommentsPostSelecioando] = React.useState()
  const [postSelecionado, setPostSelecionado] = React.useState()

  React.useEffect(() => {
    const {url} = POSTS();
    const urlPosts = POST_COMMENTS(idPost);
    
    let fetchApi = async () => {
      await listaApi(url, setListaPosts)
      await listaApi(urlPosts.url, setCommentsPostSelecioando)
    }
    fetchApi()
    if (listaPosts) {
      setPostSelecionado(listaPosts.filter(item => item.id === idPost))
    }
  }, [idPost])


  if (idPost) {
    return (
      abrirModal && (
        <div className='containerPost'>
          <motion.p
            initial={{ opacity: 0, scale: 0.5, y: -1000 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SlClose onClick={() => setAbrirModal(false)} className='closeModal' />
          </motion.p>
          {postSelecionado && (
            postSelecionado.map((item) => (
              <motion.div
                key={item.id}
                className='contentPost'
                initial={{ opacity: 0, scale: 0.5, y: -1000 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1>{item.title}</h1>
                <p>{item.body}</p>
                <img src={imagePost} alt='Imagem do post do blog' />
                {commentsPostSelecionado && (
                  commentsPostSelecionado.map((item, index) => (
                    <div className='containerComentarios' key={index}>
                      <p>Name: {item.name} #{item.id}</p>
                      <p>Email: {item.email}</p>
                      <p>Comentário: {item.body}</p>
                    </div>
                  ))
                )}
              </motion.div>
            )
            ))}
        </div>
      )
    )
  }
}

export default Index