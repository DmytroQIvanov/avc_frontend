import { useEffect } from "react";
import { getProductsStart } from "../../store/Slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ProductsPageController = () => {
  const dispatch = useDispatch();

  const key = useSelector((state: RootState) => state.products.key);
  const types = useSelector((state: RootState) => state.products.types);

  useEffect(() => {
    dispatch(
      getProductsStart({
        url: "/product",
        key,
        data: { types },
        method: "POST",
      })
    );
  }, [key, types]);
  return { states: {}, actions: {} };
};

export default ProductsPageController;
