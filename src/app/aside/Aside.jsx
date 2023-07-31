"use client"
import imagen from "../../../public/images/carrito.png";
import Image from "next/image";
import estilos from "./carrito.module.css"
import React, {useState} from "react";
import Carrito from "../carrito/Carrito";

const Aside = ({valor}) => {
    const [mostrarAside, setMostrarAside] =useState(false);

    const handleMostrarAside=()=>{
        setMostrarAside(!mostrarAside);
  
    }
    return (
        <>
            <div className={estilos.carrito} onClick={()=> handleMostrarAside()}>
                <Image
                    src={imagen}
                    width={25}
                    height={25}
                />
            </div>
            {mostrarAside &&
            (<Carrito valor={valor} />)
            }   
        </>
    );
}

export default Aside;
