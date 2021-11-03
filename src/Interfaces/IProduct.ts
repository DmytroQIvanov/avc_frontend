import { IUser } from "./IUser";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  comments: IComment[];
  type: string;
  productVariant: {
    price: number;
    taste: string;
    url1: string;
    property: {
      weight: string;
      price: number;
    }[];
  }[];
}

interface IComment {
  content: string;
  user: IUser;
}
