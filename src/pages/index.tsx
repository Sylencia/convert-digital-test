import Head from "next/head";
import { useState, useCallback } from "react";
import { client } from "../utils/apolloClient";
import { GetProductQuery } from "../schemas/GetProductQuery";
import type { Product } from "../types/Product";
import { Cart } from "./Cart";
import { ProductDescription } from "./ProductDescription";
import { ProductImages } from "./ProductImages";
import { VariantDisplay } from "./VariantDisplay";

export async function getServerSideProps() {
  const { data } = await client.query<{ product: Product }>({
    query: GetProductQuery,
  });

  return { props: { product: data.product } };
}

type HomeProps = {
  product: Product;
};

type CartState = Record<string, number>;

export default function Home({ product }: HomeProps) {
  console.log(product);
  const [cart, setCart] = useState<CartState>({});
  const [variant, setVariant] = useState<number>(-1);

  const addItemToCart = useCallback(() => {
    const itemId = product.variants.nodes[variant].id;

    setCart((cart: CartState) => ({
      ...cart,
      [itemId]: (cart[itemId] ?? 0) + 1,
    }));
  }, [cart, product, variant]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <Head>
        <title>Convert Digital Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row items-center justify-center h-screen w-full flex-1">
        <div className="flex flex-col w-full h-screen">
          <VariantDisplay
            variantIdx={variant}
            variantProducts={product}
            setVariant={setVariant}
          />
          <ProductDescription
            product={product}
            variant={variant}
            addToCart={addItemToCart}
          />
        </div>
        <ProductImages product={product} />
      </main>

      <div className="absolute top-2 right-0 -translate-x-1/2">
        <Cart cart={cart} />
      </div>
    </div>
  );
}
