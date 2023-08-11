import { useCallback } from "react";
import type { Product } from "../../types/Product";

type ProductDescriptionProps = {
  product?: Product;
  variant: number;
  addToCart: () => void;
};

export const ProductDescription = ({
  product,
  variant,
  addToCart,
}: ProductDescriptionProps) => {
  if (!product) {
    return null;
  }

  const selectedVariant = variant >= 0 ? product.variants.nodes[variant] : null;
  const variantTitle = selectedVariant
    ? selectedVariant.title
    : `${product.variants.nodes.length} variants available`;
  const price = selectedVariant ? (
    <span className="text-xl font-semibold">{`${selectedVariant.priceV2.currencyCode}$${selectedVariant.priceV2.amount}`}</span>
  ) : (
    <span className="text-xl font-semibold">{`From ${product.priceRange.minVariantPrice.currencyCode}$${product.priceRange.minVariantPrice.amount}`}</span>
  );

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col gap-2">
        <div className="text-3xl font-bold">{product.title}</div>
        <div className="text-xl font-gray-600">{variantTitle}</div>
        <div className="text-slate-600">{price}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: product.descriptionHtml,
          }}
        />
        {selectedVariant ? (
          <div className="flex h-12 gap-2">
            <button
              className="w-full bg-orange-500 px-4 font-bold text-white rounded hover:bg-orange-600"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
