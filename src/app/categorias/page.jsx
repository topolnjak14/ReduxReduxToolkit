"use client"
import BotonVer from "./BotonVer";
/* Con el apartado categorias, debemos acceder
de nuevo a la api para renderizar los datos, despues
se debe hacer otro fetch para obtener la primera imagen de cada
categoria */

//1 Obtenemos las categorias y las metemos en un array
//2 Hacemos otro fetch que pueda almacenar los productos

import estilos from "./categorias.module.css";

const Page =async () => {
    const categorias= await fetch("https://fakestoreapi.com/products/categories")
    .then(response => response.json());

    const productos= await Promise.all(
        categorias.map(async categoria=> {
            const producto=await(fetch(`https://fakestoreapi.com/products/category/${categoria}?limit=1`))
            .then(response => response.json());
            return{
                image:producto[0].image,
                categoria
            }
       })
    )

    return (
        <>
           <div className={estilos.columnas}>
                {categorias.map((valor, indice)=>
                <div className={`${estilos.columnas} ${estilos.categoria}`} key={indice}>
                   {valor} 
                </div>
                )}
           </div>
           <div className={estilos.columnas} >
                {productos.map((valor, indice)=>
                <div className={estilos.columna}>
                    <BotonVer valor={valor} />
                </div>
                )}
           </div>
        </>
    );
}

export default Page;