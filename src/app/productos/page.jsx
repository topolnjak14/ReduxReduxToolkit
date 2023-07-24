import Ficha from "../componentes/Ficha";

const cargarDatos =()=>{
    return fetch("https://fakestoreapi.com/products", {cache:"no-store"})
    .then(response => response.json())
}

export default async function page() {
    const datos=await cargarDatos();
    return (
        <>
         {datos.map((valor, indice)=>
         <Ficha valor={valor}/>
         )}   
        </>
    );
}

