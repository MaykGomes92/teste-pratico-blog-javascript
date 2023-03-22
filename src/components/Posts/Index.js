import React, { useContext } from 'react'
import './style.scss'
import imagePost from '../../assets/background-tecnologia.jpg'
import { UsersGlobalContext } from '../../Hooks/ContextUsers';

function Index() {
  const { listaApi, listaPosts } = useContext(UsersGlobalContext)
  const [baseEndPoint, setBaseEndPoint] = React.useState('posts')
  const [currentPosts, setCurrentPosts] = React.useState(3)
  const [listaProScroll , setListaProScroll] = React.useState()

  const [idPost, setIdPost] = React.useState()

  React.useLayoutEffect(() => {
    let fetchApi = async () => {
      await listaApi(baseEndPoint)
    }
    fetchApi()
  }, [])
  
  React.useLayoutEffect(() => {
    const observarSentinela = new IntersectionObserver((evento) => {
      if(evento.some((evento) => evento.isIntersecting)){
        setCurrentPosts((state) => state + 3)
      }
    });
    observarSentinela.observe(document.querySelector('#sentinela'));
    if(listaPosts) {
      setListaProScroll(listaPosts.filter((item) => {
        return item.id < currentPosts
      }))
    }  
    return () => observarSentinela.disconnect();
  },[currentPosts])

  function pegarIdPost(idPost){
    setIdPost(idPost)
  }


  return (
    <section className='sectionPosts'>
      <h1>Posts</h1>
          {idPost && (
            <div>
              {listaPosts.filter((item) => {
                return item.id === idPost
              }).map(item => (
                <h1>{item.name}</h1>
              ))}
            </div>
          )}
      <ul>
        {listaProScroll && (
          listaProScroll.map(item => (
            <li key={item.id} onClick={() => pegarIdPost(item.id)}>
              <div>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
                <img src={imagePost} alt='Imagem do post'/>
                <button>Ver Mais</button>
              </div>
            </li>
          ))
        )}
        <li id='sentinela'/>
      </ul>
    </section>
  )
}

export default Index;