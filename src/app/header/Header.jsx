import Link from "next/link";
import imagen from "../../../public/images/carrito.png";
import Image from "next/image";
import estilos from "./nav.module.css";

const Header = () => {
    return (
        <>
          <div className={estilos.nav}>
                <Link href="/about" className={estilos.logo}>
                    TechVibe
                    <span>.</span>
                </Link>
            <div className={estilos.select}>
                <Link href="/about">About</Link>
                <Link href="/about">Hot sales</Link>
                <Link href="/about">Pricing</Link>
            </div>
            <div className={estilos.carrito}>
                <Image
                    src={imagen}
                    width={25}
                    height={25}
                />
            </div>
          </div> 
        </>
    );
}

export default Header;
