import Link from "next/link";
import estilos from "./nav.module.css";
import Aside from "../aside/Aside";

const Header = () => {
    return (
        <>
          <div className={estilos.nav}>
                <Link href="/" className={estilos.logo}>
                    TechVibe
                    <span>.</span>
                </Link>
            <div className={estilos.select}>
                <Link href="/about">About</Link>
                <Link href="/about">Hot sales</Link>
                <Link href="/about">Pricing</Link>
            </div>
                <Aside/>
          </div> 
        </>
    );
}

export default Header;
