export type PostProductDTO = {
  name: string;
  description: string;
  preDescription: string;
  type: string;
  numberOfProduct: number;
  recommendedProducts: string[];
  productType: string;
  productVariant: {
    price: number;
    taste: string;
    image: File;
    property: {
      weight: string;
      price: number;
    }[];
  }[];
};
