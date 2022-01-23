import { useEffect, useState } from "react";
import {
  chooseTaste,
  chooseWeight,
  getProductStart,
} from "../../store/Slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import { addProductToBasketStart } from "../../store/Slices/userSlice";
import { IProduct } from "../../Interfaces/IProduct";
import { getProductsStart } from "../../store/Slices/productsSlice";

const ProductPageController = () => {
  const dispatch = useDispatch();

  //STATES
  const [quantity, setQuantity] = useState(1);
  const [tastePanel, setTastePanel] = useState(false);
  const [weightPanel, setWeightPanel] = useState(false);
  // const [similarProduct, setSimilarProduct] = useState<IProduct[]>([]);
  const [selectedPanelIndex, setSelectedPanelIndex] = useState(0);
  const params: { id: string } = useParams();
  const product = useSelector((state: RootState) => state.product.product);
  const products = useSelector((state: RootState) => state.products.products);
  const choosenState = useSelector(
    (state: RootState) => state.product.choosenState
  );
  const loading = useSelector((state: RootState) => state.product.loading);

  //USE-EFFECTS
  useEffect(() => {
    dispatch(getProductStart({ url: "/product", id: params.id }));
  }, [window.location.href]);

  useEffect(() => {
    dispatch(getProductsStart({ url: "/product", method: "POST" }));
  }, []);

  //ACTIONS

  const handleTastePanel = () => {
    setTastePanel(!tastePanel);
  };

  const handleWeightPanel = () => {
    setWeightPanel(!weightPanel);
  };

  const choosePanel = (index: number) => {
    setSelectedPanelIndex(index);
  };

  const chooseWeightF = (index: number) => {
    dispatch(chooseWeight(index));
  };
  const chooseTasteF = (index: number) => {
    dispatch(chooseTaste(index));
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
      selectedPanelIndex,
      products,
    },
    actions: {
      choosePanel,
      handleTastePanel,
      handleWeightPanel,
      setQuantity,
      addProductToBasket,
      chooseWeightF,
      chooseTasteF,
    },
  };
};

export default ProductPageController;
