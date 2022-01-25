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
  const [countProductVariant, setCountProductVariant] = useState(1);

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
      required: { value: true, message: "Это обязательное поле" },
    });

    register("preDescription", {
      required: { value: true, message: "Это обязательное поле" },
      minLength: { value: 100, message: "Минимальное кол-во символов - 100" },
    });
    register("description", {
      required: { value: true, message: "Это обязательное поле" },
      minLength: { value: 200, message: "Минимальное кол-во символов - 200" },
    });
    register("numberOfProduct", {
      required: { value: true, message: "Это обязательное поле" },
      min: { value: 0, message: "Не может быть меньше 0" },
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
    actions: { addProduct, setCountProductVariant },
    states: { countProductVariant, ProductVariantComponent },
    forms: { register, handleSubmit, errors, onSubmit },
  };
};

export default useAddProductController;
