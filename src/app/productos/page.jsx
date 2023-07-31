import Link from "next/link";
import Ficha from "../componentes/Ficha";
import estilos from "./productos.module.css"

const cargarDatos =()=>{
    return fetch("https://fakestoreapi.com/products", {cache:"no-store"})
    .then(response => response.json())
}

export default async function page() {
    const datos=await cargarDatos();
    return (
        <>
        <Link href="/"><button>Volver</button></Link>
        <div className={estilos.contenedorProductos}>
            <div className={estilos.productos}>
            {datos.map((valor, indice)=>
            <Ficha valor={valor}/>
            )}   
            </div>
        </div>

        </>
    );
}



