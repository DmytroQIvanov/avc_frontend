import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../Components/Loader/Loader";
import { SideBar } from "../../Components/SideBar/SideBar";
import { getProductsStart } from "../../store/Slices/productsSlice";
import { RootState } from "../../store/store";
import { Product } from "./Product/Product";
import "./ProductsPage.sass";
import MobileControlBar from "../../Components/MobileControlBar/MobileControlBar";
import ControlSidePanel from "../../Components/ControlSidePanel/ControlSidePanel";
import { useTranslation } from "react-i18next";

const ProductsPage = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const key = useSelector((state: RootState) => state.products.key);
  const loading = useSelector((state: RootState) => state.products.loading);
  const types = useSelector((state: RootState) => state.products.types);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const [visibilitySidePanel, setVisibilitySidePanel] = useState(false);
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

  return (
    <>
      <ControlSidePanel
        visibilitySidePanel={visibilitySidePanel}
        setVisibilitySidePanel={setVisibilitySidePanel}
      />
      <div className="products-page">
        {loading && <Loader />}
        <MobileControlBar setVisibilitySidePanel={setVisibilitySidePanel} />
        <SideBar />

        <div className="products-page__container">
          {products?.map((elem) => (
            <Product data={elem} key={elem.id} />
          ))}
          {products.length == 0 && !loading && (
            <h3 style={{ marginTop: "50px" }}>{t("products.nothingFound")}</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
