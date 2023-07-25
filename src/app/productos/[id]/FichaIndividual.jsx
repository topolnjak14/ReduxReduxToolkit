"use client"

import Imagen from "@/app/componentes/Imagen";
import { useDispatch } from "react-redux"; //Para poder grabar datos en nuestro store
import { comprar } from "../../../../store/miSlice";


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
         <div>{datos.title} </div>   
         <div>{datos.price}$</div>   
         <div>{datos.description}</div>   
         <div>{datos.category}</div>   
         <div>{datos.rating.rate}({datos.rating.count}) </div>   
         <div>
            <Imagen valor={datos} />
         </div>   
         <div>
            <button onClick={() => adquirir(datos)}>Comprar</button>
         </div>   
        </>
    );
}

export default FichaIndividual;
