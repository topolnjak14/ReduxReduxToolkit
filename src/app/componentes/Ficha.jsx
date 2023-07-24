import Link from "next/link";
import Imagen from "./Imagen";

const Ficha = ({valor}) => {
    return (
        <>
          <div className="producto">
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
                <Link href=""><button>Ver más</button></Link>
            </div>
          </div>  
        </>
    );
}

export default Ficha;
