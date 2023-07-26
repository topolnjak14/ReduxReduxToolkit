"use client"
/* Lo primero que tiene que hacer este componente es
leer el store */

/* useSelector permite que leamos el store
y el dispatch que podamos modificarlo */

/* carrito va a leer miCarrito y lo va a guardar */

/* Despues empleamos un .map para mostrar en pantalla
todos los productos añadidos a carrito */

/* useMemo hará que la operación de suumar los valores del carrito
solamente se ejecute si hubo algun cambio */

import { useSelector, useDispatch } from "react-redux";
import estilos from "./carrito.module.css";
import { useMemo, useState } from "react";
import { devolver } from "../../../store/miSlice";

const Carrito = () => {
    const [total, setTotal]= useState(0)
    const carrito= useSelector(state => state.misValores.miCarrito)
    const dispatch= useDispatch() 

    const calculaTotal=useMemo(()=> setTotal(carrito.reduce((acumulador, valorActual)=>
    acumulador + valorActual.precio, 0
    )), [carrito])
    
    const eliminar=(producto)=>{
        dispatch(devolver(producto))
    }
    return (
        <>
        <div>{total} </div>
        <div className={estilos.miCarrito}>
           {carrito.map((valor, indice)=>
           <div key={indice}>
                <img onClick={() => eliminar(valor.producto)}
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


