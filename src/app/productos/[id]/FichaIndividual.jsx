"use client"

import Imagen from "@/app/componentes/Imagen";
import { useDispatch } from "react-redux"; //Para poder grabar datos en nuestro store
import { comprar } from "../../../../store/miSlice";
import Link from "next/link";
import estilos from "../[id]/individual.module.css";


/* Datos es el fetch que se realizó para cargar
los id d elos productos */

/* Cuando pulsemos el boton de comprar la funcion
tendrá que obtener el producto y llevarlo al store de redux
para que lo guarde y luego aparezca en el carrito de la compra */

/* Ya tenemos un componente Imagen.jsx peor podemos reutilizarlo,
solo que ese recibe VALOR y en este caso esperamos DATOS le 
decimos que el nombre es VALOR pero que en realidad empleamos DATOS
valor={datos}*/

/* adquirir debe ingresar al Store, usar el reducer "COMPRAR"
y luego agregar el producto a miCarrito:[] */

/* Para eliminar un producto del carrito haremos referencia a su ID,
lo que queremos es borrarlo, por lo tanto tambien haremos
referencia a producto */

const FichaIndividual = ({datos}) => {
    const dispatch =useDispatch()
    const adquirir = (datos) => {
        dispatch(comprar(
            {
                producto:datos.id,
                precio:datos.price,
                imagen:datos.image
            }
        ))
    }
    return (
        <>
        <div className={estilos.container}>
         <div className={estilos.title}>{datos.title} </div>   
         <div className={estilos.price}>{datos.price}$</div>   
         <div className={estilos.description}>{datos.description}</div>   
         <div className={estilos.category}>{datos.category}</div>   
         <div>Rate {datos.rating.rate}({datos.rating.count}) </div>   
         <div className={estilos.img} >
            <Imagen valor={datos} />
         </div>   
         <div className={estilos.botonContainer}>
            <button onClick={() => adquirir(datos)} className={estilos.buy}>BUY</button>
            <Link href="/productos"><button className={estilos.back}>BACK</button></Link>
         </div>   
        </div>
        </>
    );
}

export default FichaIndividual;

