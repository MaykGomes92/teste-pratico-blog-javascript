import React from "react";
import { createContext } from "react";
import axios from "axios";
const baseUrl = 'https://jsonplaceholder.typicode.com/'
export const UsersGlobalContext = createContext();




export function UsersGlobalContextProvider({ children }) {

 async function listaApi(endPoint,setState){
    await axios.get(baseUrl + endPoint).then((response) => {
      setState(response.data)
  }).catch((error) => {
    console.log(error)
  })
 }

 return (
  <UsersGlobalContext.Provider value={{ listaApi }}>
   {children}
  </UsersGlobalContext.Provider>
 )
}