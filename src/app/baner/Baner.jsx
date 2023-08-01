import Link from "next/link";
import estilos from "./baner.module.css";
import imagen from "../../../public/images/lovepik.png";
import Image from "next/image";

const Baner = () => {
    return (
        <>
          <div className={estilos.container}>
            <div className={estilos.leftSide}>
                <h1>Discover the latest trends in fashion and shop now!</h1>
                <h2>Browse our wide selection of products and enjoy fast, secure, and hassle-free shopping experience today!</h2>
                <Link href="/productos">
                    <button>Shop</button>
                </Link>
            </div>
            <div className={estilos.rightSide}>
                <div className={estilos.firstSide}>
                <Image
                    src={imagen}
                    width={700}
                    height={700}
                />
                </div>
            </div>
          </div>  
        </>
    );
}

export default Baner;

