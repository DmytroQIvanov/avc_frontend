import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Product } from "../../Pages/ProductsPage/Product/Product";
import { getProductsStart } from "../../store/Slices/productsSlice";
import { RootState } from "../../store/store";
import { Loader } from "../../Components/Loader/Loader";
import ProductsPage from "../ProductsPage/ProductsPage";

const AdminProducts = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProductsStart({
        url: "/product",
        // key,
        // data: { types },
        method: "POST",
      })
    );
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <Link to="/admin/addProduct">Add product</Link>
      <ProductsPage admin={true} />
    </div>
  );
};
export default AdminProducts;
