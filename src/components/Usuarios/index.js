import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import {USERS} from '../../API.js'
import { UsersGlobalContext } from '../../Hooks/ContextUsers'
import perfilUsuarioImage from '../../assets/perfil-de-usuario.png'

function Index() {
  const {listaApi} = React.useContext(UsersGlobalContext)
  const [listaUsuarios, setListaUsuarios] = React.useState()

  React.useEffect(() => {
    const {url} = USERS()
    let fetchApi = async () => {
      await listaApi(url, setListaUsuarios)
    }
    fetchApi()
  },[])


  return (
    <section className='containerUsuarios'>
      {listaUsuarios && (
        listaUsuarios.map((item) => (
          <div className='infoUsuarios' key={item.id}>
            <Link to={`user/${item.id}`}>
            <img src={perfilUsuarioImage} alt='foto do usuario'/>
            <div className='perfilUsuario'>
              <h2>{item.name}</h2>
              <h2>{item.email}</h2>
            </div>
            </Link>
          </div>
        ))
      )}
    </section>
  )
}

export default Index