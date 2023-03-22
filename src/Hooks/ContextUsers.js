import React from "react";
import { createContext } from "react";
import axios from "axios";
const baseUrl = 'https://jsonplaceholder.typicode.com/'
export const UsersGlobalContext = createContext();




export function UsersGlobalContextProvider({ children }) {

 const [listaPosts, setListaPosts] = React.useState()


 async function listaApi(endPoint){
    await axios.get(baseUrl + endPoint).then((response) => {
    setListaPosts(response.data)
  })
 }

 return (
  <UsersGlobalContext.Provider value={{ listaApi, listaPosts }}>
   {children}
  </UsersGlobalContext.Provider>
 )
}