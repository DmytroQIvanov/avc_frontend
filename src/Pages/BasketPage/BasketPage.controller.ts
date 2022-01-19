import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import {
  changeOrderQuantity,
  deleteOrderProduct,
} from "../../store/Slices/userSlice";
import { IOrderProduct } from "../../Interfaces/IUser";

const BasketPageController = () => {
  const products = useSelector((state: RootState) => state.user.user?.basket);
  const user = useSelector((state: RootState) => state.user.user);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  const increaseProductQuantity = (product: IOrderProduct) => {
    dispatch(
      changeOrderQuantity({
        url: "/user/changeProductQuantity",
        method: "PATCH",
        data: {
          name: product.product.name,
          changedQuantity: 1,
          quantity: product.quantity + 1,
        },
      })
    );
  };
  const reduceProductQuantity = (product: IOrderProduct) => {
    dispatch(
      changeOrderQuantity({
        url: "/user/changeProductQuantity",
        method: "PATCH",
        data: {
          name: product.product.name,
          changedQuantity: -1,
          quantity: product.quantity - 1,
        },
      })
    );
  };

  const deleteProductQuantity = (product: IOrderProduct) => {
    dispatch(
      deleteOrderProduct({
        url: `/user/product`,
        method: "DELETE",
        data: {
          name: product.product.name,
        },
      })
    );
  };
  useEffect(() => {
    let result = 0;
    products?.forEach((elem) => {
      result +=
        elem.product.productVariant[elem.taste].property[elem.weight].price *
        elem.quantity;
    });
    setTotalPrice(result);
  }, [products]);
  return {
    states: { user, products, totalPrice },
    actions: {
      increaseProductQuantity,
      reduceProductQuantity,
      deleteProductQuantity,
    },
  };
};

export default BasketPageController;
