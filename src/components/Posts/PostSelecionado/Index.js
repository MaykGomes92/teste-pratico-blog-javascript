import React, { useContext } from 'react'
import './style.scss'
import { UsersGlobalContext } from '../../../Hooks/ContextUsers';
import imagePost from '../../../assets/background-tecnologia.jpg';
import axios from 'axios';

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
    <div>
     <h1 onClick={() => setAbrirModal(false)}>X</h1>
     {postSelecionado && (
      postSelecionado.map((item) => (
       <div key={item.id}>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
        <img src={imagePost} alt='Imagem do post do blog' />
        {commentsPostSelecionado && (
         commentsPostSelecionado.map((item) => (
          <div>
           <p>Name: {item.name} #{item.id}</p>
           <p>Email: {item.email}</p>
           <p>Comentário: {item.body}</p>
          </div>
         ))
        )}
       </div>
      )
      ))}
    </div>
   )
  )
 }
}

export default Index