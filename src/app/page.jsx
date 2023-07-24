import Link from "next/link";

const Page = () => {
  return (
      <>
          Pagina principal
          <Link href="/categorias"><button>Categorías</button></Link>
          <Link href="/productos"><button>Productos</button></Link>
      </>
  );
}

export default Page;