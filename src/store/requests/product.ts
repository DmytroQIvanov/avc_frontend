import { IProduct } from "../../Interfaces/IProduct";
import { hostAddress } from "../../config";
import axios from "axios";

export function requestGetProduct(id: string): Promise<IProduct> {
  return axios
    .request({
      method: "GET",
      url: `${hostAddress}/product/${id}`,
    })
    .then((elem) => elem.data);
  //I LOVE MYSELF
}
