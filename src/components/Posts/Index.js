import React from 'react'
import './style.scss'
import PostSelecionado from './PostSelecionado';
import Usuarios from '../Usuarios'
import imagePost from '../../assets/background-tecnologia.jpg'
import { UsersGlobalContext } from '../../Hooks/ContextUsers';
import { POSTS } from '../../API.js';
import { AiOutlineArrowDown } from 'react-icons/ai'


function Index() {
  const { listaApi } = React.useContext(UsersGlobalContext);
  const [listaPosts, setListaPosts] = React.useState()

  const [currentPosts, setCurrentPosts] = React.useState(3)
  const [listaProScroll, setListaProScroll] = React.useState()

  const [idPost, setIdPost] = React.useState()
  const [abrirModal, setAbrirModal] = React.useState(false)

  const [abrirListaUsuarios, setAbrirListaUsuarios] = React.useState(false)

  React.useLayoutEffect(() => {
    const { url } = POSTS()
    let fetchApi = async () => {
      await listaApi(url, setListaPosts)
    }
    fetchApi()
  }, [])

  React.useLayoutEffect(() => {
    const observarSentinela = new IntersectionObserver((evento) => {
      if (evento.some((evento) => evento.isIntersecting)) {
        setCurrentPosts((state) => state + 3)
      }
    });
    observarSentinela.observe(document.querySelector('#sentinela'));
    if (listaPosts) {
      setListaProScroll(listaPosts.filter((item) => {
        return item.id < currentPosts
      }))
    }
    return () => observarSentinela.disconnect();
  }, [currentPosts])

  return (
    <section className='sectionPosts'>
      <h1>Posts</h1>
      <p className='openUsuarios'>
        Usuários do blog: <AiOutlineArrowDown onClick={() => setAbrirListaUsuarios(!abrirListaUsuarios)} />
      </p>
      <PostSelecionado idPost={idPost} abrirModal={abrirModal} setAbrirModal={setAbrirModal} />
      <div className='containerPosts'>
        <ul onClick={() => setAbrirModal(true)}>
          {listaProScroll && (
            listaProScroll.map(item => (
              <li key={item.id} onClick={() => setIdPost(item.id)}>
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.body}</p>
                  <img src={imagePost} alt='Imagem do post' />
                  <button>Ver Mais</button>
                </div>
              </li>
            ))
          )}
          <li id='sentinela' />
        </ul>
        <div className='usuariosList' style={abrirListaUsuarios ? {display:'flex'} : {display:'none'}}>
          {abrirListaUsuarios && (
            <div className='listaUsuarios'>
              <Usuarios />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Index;