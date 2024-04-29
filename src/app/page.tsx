import Image from "next/image";

import { getProducts } from "@/lib/stripe";

import hero from "@/assets/hero.jpg";
import { Product } from "@/components/home/product";

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <section className="border-b">
        <div className="container flex">
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-bold">
              A <span className="text-red-500">Melhor</span> pizza da Cidade
            </h1>
            <p className="mt-4 text-2xl">
              Faça seu pedido agora e experimente o sabor autêntico da Itália
              entregue na sua porta.
            </p>
          </div>

          <Image
            src={hero}
            alt="Homem de camisa vermelha fazendo sinal com a mão segurando caixas de pizza"
            width={500}
          />
        </div>
      </section>
      <section>
        <div className="container py-14">
          <h2 className="mb-4 text-3xl font-semibold">Nosso Cardápio</h2>
          <ul className="grid grid-cols-4 gap-8">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
