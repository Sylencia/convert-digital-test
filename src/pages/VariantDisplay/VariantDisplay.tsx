import Image from "next/image";
import { useCallback } from "react";
import clsx from "clsx";
import { Product } from "../../types/Product";
import { createShimmerEffect } from "../../utils/shimmer";

type VariantDisplayProps = {
  variantProducts: Pick<Product, "variants">;
  variantIdx: number;
  setVariant: (newVariant: number) => void;
};

export const VariantDisplay = ({
  variantProducts,
  variantIdx,
  setVariant,
}: VariantDisplayProps) => {
  if (!variantProducts) {
    return null;
  }

  return (
    <div className="flex flex-row gap-2 p-2">
      {variantProducts.variants.nodes.map((product, idx) => {
        const size = product.selectedOptions.find(
          (option) => option.name === "Size"
        );

        const color = product.selectedOptions.find(
          (option) => option.name === "Colour"
        );

        return (
          <div
            key={product.id}
            className="flex flex-col h-full rounded-sm border border-black"
            onClick={() => setVariant(idx)}
          >
            <Image
              src={product.image.src}
              alt={product.image.altText ?? ""}
              width={product.image.width}
              height={product.image.height}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${createShimmerEffect(
                500,
                500
              )}`}
            />
            <div
              className={clsx("h-fit text-center", {
                "font-bold": idx === variantIdx,
              })}
            >
              Size {size.value} / {color.value}
            </div>
          </div>
        );
      })}
    </div>
  );
};
