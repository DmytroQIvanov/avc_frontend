import { useEffect, useState } from "react";
import { getProductStart } from "../../store/Slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import { addProductToBasketStart } from "../../store/Slices/userSlice";

const ProductPageController = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [tastePanel, setTastePanel] = useState(false);
  const [weightPanel, setWeightPanel] = useState(false);
  const params: { id: string } = useParams();

  const product = useSelector((state: RootState) => state.product.product);
  const choosenState = useSelector(
    (state: RootState) => state.product.choosenState
  );
  const loading = useSelector((state: RootState) => state.product.loading);

  useEffect(() => {
    dispatch(getProductStart({ url: "/product", id: params.id }));
  }, []);

  const handleTastePanel = () => {
    setTastePanel(!tastePanel);
  };

  const handleWeightPanel = () => {
    setWeightPanel(!weightPanel);
  };

  const addProductToBasket = () => {
    if (!product) return;
    dispatch(
      addProductToBasketStart({
        url: `/user/product/${product.id}`,
        method: "POST",
        data: {
          taste: choosenState.taste,
          weight: choosenState.weight,
          quantity,
          product,
        },
      })
    );
  };

  return {
    states: {
      quantity,
      tastePanel,
      weightPanel,
      loading,
      product,
      choosenState,
      id: params.id,
    },
    actions: {
      handleTastePanel,
      handleWeightPanel,
      setQuantity,
      addProductToBasket,
    },
  };
};

export default ProductPageController;
