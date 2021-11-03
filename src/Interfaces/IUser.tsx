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
  favourite: IProduct[];
}
export interface IOrder {
  id: string;
  orderedAt: any;
  status: string;
  orderProducts: IOrderProduct[];
  orderNotes: string;
  deliveryAddress: string;
  user: IUser;
  PaymentMethod: string;
}

interface IOrderProduct {
  product: IProduct;
  quantity: number;
  taste: number;
  weight: number;
  // ID: string;
}
