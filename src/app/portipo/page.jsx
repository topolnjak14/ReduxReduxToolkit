"use client"
/* Este componente irá al store de redux y leer
la categoria que tiene que visualizar */

/* Cuando el componente ya sepa que categoria tiene,
se debe acceser de nuevo a la api y mostrar los 
productos correspondientes a la misma */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Ficha from "../componentes/Ficha";
import estilos from "../productos/productos.module.css"

const Page = () => {
    const categoria= useSelector(state => state.misValores.categoria)
    const[contenido, setContenido]= useState("");
    useEffect(() =>{
        async function obtenerDatos(){
            const respuesta= await fetch(`https://fakestoreapi.com/products/category/${categoria}`)
            const datos = await respuesta.json();
                setContenido(() => datos.map(valor=>
                <Ficha key={valor.id} valor={valor}/>))
        }
        obtenerDatos();
    },[categoria])

    return (
        <>
         <div className={estilos.productos}>
           {contenido} 
         </div>
        </>
    );
}

export default Page;
