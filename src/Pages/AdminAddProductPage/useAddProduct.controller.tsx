import { getProductStart } from "../../store/Slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { FC, ReactNode, useCallback, useEffect, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { buildFormData } from "../../functions/general";
import { IProduct } from "../../Interfaces/IProduct";
import { PostProductDTO } from "../../DTOs/ProductDTO";
import Input from "../../Components/Input/Input";
import VariantComponent from "./VariantComponent/VariantComponent";
import { type } from "os";
import axios from "axios";
import { hostAddress } from "../../config";

const useAddProductController = () => {
  //FORM
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PostProductDTO>({
    defaultValues: {
      name: "",
      preDescription: "",
      description: "",
      numberOfProduct: 0,
      productType: "",
      productVariant: [],
      type: "",
      recommendedProducts: [],
    },
  });

  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const onClick = (result: string) => {
    if (!selectedProducts.includes(result)) {
      setSelectedProducts((prevState) => [...prevState, result]);
    } else {
      setSelectedProducts(selectedProducts.filter((elem) => elem !== result));
    }
  };
  const [countProductVariant, setCountProductVariant] = useState(1);

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    axios
      .post(`${hostAddress}/product`)
      .then((elem) => setProducts(elem.data.products));
  }, []);

  //PRODUCT VARIANT

  const ProductVariantComponent: React.FC = () => {
    const array = [];

    for (let i = 0; i <= countProductVariant - 1; i++) {
      array.push(
        <VariantComponent
          key={i + "_s"}
          i={i}
          register={register}
        ></VariantComponent>
      );
    }
    return <>{array}</>;
  };

  const onSubmit = handleSubmit((data) => console.log(data));

  useEffect(() => {
    register("name", {
      required: { value: true, message: "?????? ???????????????????????? ????????" },
    });

    register("preDescription", {
      required: { value: true, message: "?????? ???????????????????????? ????????" },
      minLength: { value: 100, message: "?????????????????????? ??????-???? ???????????????? - 100" },
    });
    register("description", {
      required: { value: true, message: "?????? ???????????????????????? ????????" },
      minLength: { value: 200, message: "?????????????????????? ??????-???? ???????????????? - 200" },
    });
    register("numberOfProduct", {
      required: { value: true, message: "?????? ???????????????????????? ????????" },
      min: { value: 0, message: "???? ?????????? ???????? ???????????? 0" },
    });
  }, []);
  const dispatch = useDispatch();

  const productType = useSelector(
    (state: RootState) => state.product.productType
  );
  const productVariant = useSelector(
    (state: RootState) => state.product.productVariant
  );

  const addProduct = (productData: IProduct) => {
    const productDataForm = new FormData();

    buildFormData(productDataForm, productData);
    dispatch(
      getProductStart({
        url: "/admin/addProduct",
        method: "POST",
        productDataForm,
      })
    );
  };
  return {
    actions: { addProduct, setCountProductVariant, onClick },
    states: {
      countProductVariant,
      ProductVariantComponent,
      products,
      selectedProducts,
    },
    forms: { register, handleSubmit, errors, onSubmit },
  };
};

export default useAddProductController;
