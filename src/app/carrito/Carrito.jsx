"use client"
/* Lo primero que tiene que hacer este componente es
leer el store */

/* useSelector permite que leamos el store
y el dispatch que podamos modificarlo */

/* carrito va a leer miCarrito y lo va a guardar */

/* Despues empleamos un .map para mostrar en pantalla
todos los productos añadidos a carrito */



import { useSelector, useDispatch } from "react-redux/es/hooks/useSelector";
import estilos from "./carrito.module.css";

const Carrito = () => {
    const carrito= useSelector(state => state.misValores.miCarrito)
    /* const dispatch= useDispatch(); */

    
    return (
        <>
        <div className={estilos.miCarrito}>
           {carrito.map((valor, indice)=>
           <div key={indice}>
                <img onClick={() => eliminar()}
                src={valor.imagen}
                alt=""
                height={60}
                />
           </div>
           )} 
        </div>
        </>
    );
}

export default Carrito;


