import { IProduct } from "./IProduct";

export interface IUser {
  firstName: string;
  lastName: string;
  number: string;
  id: string;
  basketLength: number;
  basket: IOrderProduct[];
  notifications: { name: string; content: string; date: string }[];
  orders: IOrderProduct[][];
}

interface IOrderProduct {
  product: IProduct;
  quantity: number;
  ID: string;
}
