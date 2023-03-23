import React, { useContext } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import PostSelecionado from './PostSelecionado';
import imagePost from '../../assets/background-tecnologia.jpg'
import { UsersGlobalContext } from '../../Hooks/ContextUsers';

function Index() {
  const { listaApi, listaPosts } = useContext(UsersGlobalContext);
  const [baseEndPoint, setBaseEndPoint] = React.useState(`posts`)
  const [currentPosts, setCurrentPosts] = React.useState(3)
  const [listaProScroll, setListaProScroll] = React.useState()

  const [idPost, setIdPost] = React.useState()
  const [abrirModal, setAbrirModal] = React.useState(false)

  React.useLayoutEffect(() => {
    let fetchApi = async () => {
      await listaApi(baseEndPoint)
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

  function handleIdPost(pegarId) {
    setIdPost(pegarId)
  }


  return (
    <section className='sectionPosts'>
      <h1>Posts</h1>
        <PostSelecionado idPost={idPost} abrirModal={abrirModal} setAbrirModal={setAbrirModal} />
      <div className='teste'>
        <ul onClick={() => setAbrirModal(true)}>
          {listaProScroll && (
            listaProScroll.map(item => (
              <li key={item.id} onClick={() => handleIdPost(item.id)}>
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
        <div className='usuariosList'>
      <Link to='/usuario'>Usuarios</Link>
        </div>
      </div>
    </section>
  )
}

export default Index;