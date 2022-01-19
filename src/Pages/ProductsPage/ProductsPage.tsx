import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../Components/Loader/Loader";
import { RootState } from "../../store/store";
import { Product } from "./Product/Product";
import "./ProductsPage.sass";
import MobileControlBar from "../../Components/MobileControlBar/MobileControlBar";
import { useTranslation } from "react-i18next";
import ControlSidePanel from "../../Components/ControlSidePanel/ControlSidePanel";
import ProductsPageController from "./ProductsPage.controller";

const ProductsPage = (props: any) => {
  const {} = ProductsPageController();
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);

  const { t, i18n } = useTranslation();
  const { admin } = props;

  return (
    <>
      <div className="products-page">
        {loading && <Loader />}
        <MobileControlBar />
        {/*<SideBar />*/}
        <ControlSidePanel />

        <div className="products-page__container">
          {products?.map((elem) => (
            <Product product={elem} key={elem.id} admin={admin} />
          ))}
          {products?.length == 0 && !loading && (
            <h3 style={{ marginTop: "50px" }}>{t("products.nothingFound")}</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
