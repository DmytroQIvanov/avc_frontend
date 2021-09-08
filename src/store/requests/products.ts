import { IProduct } from './../../Interfaces/IProduct';
import { hostAddress } from '../../config';
import axios from "axios";


export function requestGetProducts(key:string):Promise<IProduct[]> {
  return axios.request({
    method: "GET",
    url: `${hostAddress}/product?key=${key}`
  }).then(elem=>elem.data);
}
