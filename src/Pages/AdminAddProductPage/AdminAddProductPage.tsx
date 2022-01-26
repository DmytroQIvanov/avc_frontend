import useAddProductController from "./useAddProduct.controller";
import Input from "../../Components/Input/Input";
import { useForm } from "react-hook-form";
import {
  createRef,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Textarea from "../../Components/Textarea/Textarea";
import BubbleListInput from "../../Components/BubbleListInput/BubbleListInput";

const AdminAddProductPage = () => {
  const {
    states: { countProductVariant, ProductVariantComponent, products },
    actions: { setCountProductVariant },
    forms: { register, errors, handleSubmit, onSubmit },
  } = useAddProductController();

  return (
    <main style={{ margin: "10px" }}>
      <form onSubmit={onSubmit}>
        <Input
          name={"Название товара"}
          inputName={"name"}
          register={register}
          errorMessage={errors.name?.message}
          placeholder={"Protein"}
        />
        <Input
          type={"checkbox"}
          name={"Популярность"}
          inputName={"popular"}
          register={register}
        />
        <Textarea
          name={"Предварительное описание товара"}
          inputName={"preDescription"}
          register={register}
          errorMessage={errors.preDescription?.message}
          type={"textarea"}
        />
        <Textarea
          name={"Описание товара"}
          inputName={"description"}
          register={register}
          errorMessage={errors.description?.message}
          type={"textarea"}
        />
        <Input
          name={"Количество товара"}
          inputName={"numberOfProduct"}
          register={register}
          type={"number"}
          errorMessage={errors.numberOfProduct?.message}
        />
        <BubbleListInput list={products} />
        <ProductVariantComponent />
        <button
          type={"button"}
          onClick={() => setCountProductVariant((prevState) => prevState + 1)}
        >
          Add {countProductVariant}
        </button>
        <button type="submit">Создать</button>
      </form>
    </main>
  );
};

export default AdminAddProductPage;
