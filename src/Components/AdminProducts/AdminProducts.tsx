import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Product } from "../../Pages/ProductsPage/Product/Product";
import {
  getProducts,
  getProductsStart,
} from "../../store/Slices/productsSlice";
import { RootState } from "../../store/store";
import { Loader } from "../Loader/Loader";

const AdminProducts = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsStart({ url: "/product" }));
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <Link to="/admin/addProduct">Add product</Link>
      <div style={{ display: "flex" }}>
        {products?.map((product) => (
          <div className="">
            <Product data={product} key={product.id} />
            <button
              onClick={() => {
                dispatch(
                  getProductsStart({
                    url: "/admin/deleteProduct",
                    method: "DELETE",
                    id: product.id,
                  })
                );
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminProducts;
