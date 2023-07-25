import Link from "next/link";
import Imagen from "./Imagen";
import estilos from "./Ficha.module.css"

/* Como no sabemos que producto se mostrará
utilizamos la variable ${valor.id} */


const Ficha = ({valor}) => {
    return (
        <>
          <div className={estilos.producto}>
            <div className="nombre">
                {valor.title}
            </div>
            <div className="precio">
                {valor.price}
            </div>
            <div className="imagen">
                <Imagen valor= {valor}/>
            </div>
            <div className="ver">
                {/* Este link debe redirigirse a la carpeta [id] */}
                <Link href={`/productos/${valor.id}`}><button>Ver más</button></Link>
            </div>
          </div>  
        </>
    );
}

export default Ficha;
