import Image from "next/image";
import type { Product } from "../../types/Product";
import { createShimmerEffect } from "../../utils/shimmer";

type ProductImagesProps = {
  product?: Pick<Product, "images">;
};

export const ProductImages = ({ product }: ProductImagesProps) => {
  const imageData = product?.images.nodes ?? [];

  return (
    <div className="px-2 w-full h-screen flex border-l border-black">
      <div className="snap-x mx-auto snap-mandatory w-full h-full flex overflow-scroll gap-2">
        {imageData.map((img) => (
          <div className="snap-start max-w-[50%] flex-shrink-0 flex items-center justify-center">
            <Image
              key={img.src}
              src={img.src}
              alt={img.altText ?? ""}
              width={img.width}
              height={img.height}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${createShimmerEffect(
                500,
                500
              )}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
