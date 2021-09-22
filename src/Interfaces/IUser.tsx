import { IProduct } from "./IProduct";

export interface IUser {
  firstName: string;
  lastName: string;
  number: string;
  id: string;
  basketLength: number;
  basket: IOrderProduct[];
  notifications: {
    notificationNameUA: string;
    contentUA: string;
    createDateTime: string;
  }[];
  orders: IOrder[];
}
export interface IOrder {
  orderedAt: any;
  status: string;
  orderProducts: IOrderProduct[];
  orderNotes: string;
}

interface IOrderProduct {
  product: IProduct;
  quantity: number;
  ID: string;
}
