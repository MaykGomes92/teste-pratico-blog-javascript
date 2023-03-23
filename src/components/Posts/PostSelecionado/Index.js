import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import './style.scss'
import { UsersGlobalContext } from '../../../Hooks/ContextUsers';
import imagePost from '../../../assets/background-tecnologia.jpg';
import axios from 'axios';
import { SlClose } from 'react-icons/sl'

function Index({ idPost, setAbrirModal, abrirModal }) {
  const { listaApi, listaPosts } = useContext(UsersGlobalContext);
  const [postSelecionado, setPostSelecionado] = React.useState(null)
  const [commentsPostSelecionado, setCommentsPostSelecioando] = React.useState()



  React.useEffect(() => {
    if (idPost) {
      setPostSelecionado(listaPosts.filter(item => item.id === idPost))

      const commentsPost = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`).then((response) => setCommentsPostSelecioando(response.data))
      }
      commentsPost()
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