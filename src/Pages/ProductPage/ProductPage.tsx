import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Redirect, useParams } from "react-router-dom";
import { Loader } from "../../Components/Loader/Loader";
import { getProductStart } from "../../store/Slices/productSlice";
import { RootState } from "../../store/store";
import "./ProductPage.sass";
import { Helmet } from "react-helmet";

const ProductPage = () => {
  const dispatch = useDispatch();
  const params: { id: string } = useParams();
  const product = useSelector((state: RootState) => state.product.product);
  const loading = useSelector((state: RootState) => state.product.loading);

  useEffect(() => {
    dispatch(getProductStart({ url: "/product", id: params.id }));
  }, []);

  const carouserArray = [
    {
      img: product?.url1,
    },
    {
      img: product?.url2,
    },
    {
      img: product?.url3,
    },
  ];
  // if (!product && loading) return;
  // if (!product) return <Redirect to={"/products"} />;

  return (
    <>
      <div className="product-page">
        {loading && <Loader />}
        {!loading && product && (
          <>
            <Helmet>
              <title>{product.name}</title>
              <meta name="description" content={product.description} />
            </Helmet>

            <div className="product-page__main-container">
              <h1 className={"product-page__mobile-name"}>{product.name}</h1>
              <Carousel
                autoPlay={true}
                interval={12000}
                infiniteLoop={true}
                showStatus={false}
                // width={500}

                className={"product-page__carousel"}
              >
                {carouserArray.map((elem) => (
                  <img src={elem.img} />
                ))}
              </Carousel>
              <div className="product-page__title-container">
                <h1 className="product-page__name">{product?.name}</h1>
                <div>{product?.description}</div>
                <div className="product-page__price-container">
                  <span className="product-page__price">
                    {product?.price} грн
                  </span>

                  <span className="product-page__cost-of-delivery">
                    Вартiсть доставки вiд 60 грн
                  </span>
                </div>
                <button className="product-page__buy-button">
                  Додати до кошику
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default ProductPage;
