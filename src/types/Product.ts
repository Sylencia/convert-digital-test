interface Image {
  id: string;
  altText: string;
  src: string;
  width: number;
  height: number;
}

interface Money {
  amount: number;
  currencyCode: string;
}

interface VariantOption {
  name: string;
  value: string;
}

export interface Product {
  descriptionHtml: string;
  images: {
    nodes: Image[];
  };
  priceRange: {
    minVariantPrice: Money;
    maxVariantPrice: Money;
  };
  title: string;
  variants: {
    nodes: {
      id: string;
      title: string;
      priceV2: Money;
      image: Image;
      selectedOptions: VariantOption[];
    }[];
  };
}
