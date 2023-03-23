import React from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'
import { UsersGlobalContext } from '../../../Hooks/ContextUsers'
import { USER_SELECIONADO } from '../../../API.js'
import perfilUsuarioImage from '../../../assets/perfil-de-usuario.png'
function Index() {

 const paramnsUrl = useParams()

 const { listaApi } = React.useContext(UsersGlobalContext)
 const [perfilUsuario, setPerfilUsuario] = React.useState()

 React.useEffect(() => {
  if (paramnsUrl) {
   const { url } = USER_SELECIONADO(paramnsUrl.id)

   let fetchApi = async () => {
    await listaApi(url, setPerfilUsuario)
   }
   fetchApi()
  }
 }, [paramnsUrl,listaApi])

 return (
  <>
   {perfilUsuario && (
    <div className='containerInfoUsuario'>
     <div className='blocoUmInfoUsuario'>
      <img src={perfilUsuarioImage} alt='Foto do usuario' />
      <div className='infoDoPerfil'>
       <h1>{perfilUsuario.name}</h1>
       <p>{perfilUsuario.username}</p>
       <p>{perfilUsuario.email}</p>
       <p>{perfilUsuario.phone}</p>
      </div>
     </div>
     <div className='infoEnderecoUsuario'>
      <h1>Cidade: {perfilUsuario.address.city}</h1>
      <h1>Rua: {perfilUsuario.address.street} {perfilUsuario.address.suite}</h1>
      <h1>Cep: {perfilUsuario.address.zipcode}</h1>
     </div>
    </div>
   )}
  </>
 )
}

export default Index