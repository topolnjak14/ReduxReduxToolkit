/* Debemos acceder a la URL de arriba y recuperar
los parametros que vamos a utilizar, para ello
usamos params */

import FichaIndividual from "./FichaIndividual";

const cargarDatos = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`, {cache:"no-store"})
    .then(response => response.json())
}

const Page = async ({params}) => {
    const {id}=params; //Accedemos a params y recuperamos el ID
    const datos = await cargarDatos(id)
    return (
        <>
          <FichaIndividual datos={datos} />  
        </>
    );
}

export default Page;
