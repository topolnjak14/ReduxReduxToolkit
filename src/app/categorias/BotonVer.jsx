"use client"
/* La imagen de este componente debe ser cliqueable
 por lo cual reutilizamos el componente Imagen.jsx*/

/* Debemos mandar la informacion de cada categoria
cuando se haga click en una imagen, lo haremos usando
redux */ 

/* Las categorias se guardaran en el evento (e ) y
luego en el store*/

/* Los datos se enviaran al reduce guardarCategoria */

/* El useRouter lo que hará es que cuando se guarde 
la categoria irá directamente a portipo */

import { guardarCategoria } from "../../../store/miSlice";
import Imagen from "../componentes/Imagen";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const BotonVer = ({valor}) => {
    const dispatch=useDispatch();
    const router= useRouter();
    const visualizar=(e)=>{
        dispatch(guardarCategoria(e))
        router.push("/portipo")
    }
    return (
        <>
        <div onClick={() => visualizar(valor.categoria)} >
         <Imagen
         valor={valor}
         width={30}
         height={30}
         />   
        </div>
        </>
    );
}

export default BotonVer;

