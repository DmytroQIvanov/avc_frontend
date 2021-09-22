import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Redirect, useParams, Link } from "react-router-dom";
import { Loader } from "../../Components/Loader/Loader";
import { getProductStart, postComment } from "../../store/Slices/productSlice";
import { RootState } from "../../store/store";
import "./ProductPage.sass";
import { Helmet } from "react-helmet";
import { userLoginStart } from "../../store/Slices/userSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const params: { id: string } = useParams();
  const product = useSelector((state: RootState) => state.product.product);
  const user = useSelector((state: RootState) => state.user.user);
  const loading = useSelector((state: RootState) => state.product.loading);
  const [choosenWeight, setChoosenWeight] = useState();
  const [choosenTaste, setChoosenTaste] = useState();

  const [comment, setComment] = useState("");
  useEffect(() => {
    dispatch(getProductStart({ url: "/product", id: params.id }));
  }, []);

  const carouserArray = [
    {
      img: product?.url1,
      key: params.id,
    },
    {
      img: product?.url2,
      key: params.id,
    },
    {
      img: product?.url3,
      key: params.id,
    },
  ];
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
                showThumbs={false}
                className={"product-page__carousel"}
              >
                {carouserArray.map((elem) => (
                  <img src={elem.img} key={elem.key} />
                ))}
              </Carousel>
              <div className="product-page__title-container">
                <h1 className="product-page__name">{product?.name}</h1>
                <div style={{ whiteSpace: "pre-wrap" }}>
                  {product?.description}
                </div>
                <div className="product-page__price-container">
                  <span className="product-page__price">
                    {product?.price} грн
                  </span>

                  <span className="product-page__cost-of-delivery">
                    Вартiсть доставки вiд 60 грн
                  </span>
                </div>
                <div
                  style={{
                    marginTop: "40px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ marginTop: "25px" }}>
                    <span
                      className={"yellow-button"}
                      style={{ color: "black" }}
                    >
                      {choosenWeight}
                    </span>
                    <div style={{ marginTop: "25px" }}>
                      {product.arrayOfWeight.map((elem) => (
                        <div onClick={() => setChoosenWeight(elem)}>{elem}</div>
                      ))}
                    </div>
                  </div>
                  {product.arrayOfTaste.length != 0 && (
                    <div style={{ marginTop: "35px" }}>
                      <span
                        className={"yellow-button"}
                        style={{ color: "black" }}
                      >
                        {choosenTaste}
                      </span>
                      <div style={{ marginTop: "25px" }}>
                        {product.arrayOfTaste.map((elem) => (
                          <div onClick={() => setChoosenTaste(elem)}>
                            {elem}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className="product-page__buy-button"
                  onClick={() => {
                    dispatch(
                      userLoginStart({
                        url: `/user/product/${product.id}`,
                        method: "POST",
                      })
                    );
                  }}
                >
                  Додати до кошику
                </button>
              </div>
              <div className={"product-page__comment-input-container"}>
                {user ? (
                  <div className={"product-page__comment-input"}>
                    <input
                      className={"default-input"}
                      value={comment}
                      onChange={(event) => {
                        setComment(event.target.value);
                      }}
                    />
                    <button
                      className={"grey-button"}
                      onClick={() => {
                        dispatch(
                          postComment({
                            url: "/product/comment",
                            method: "POST",
                            data: { content: comment },
                          })
                        );
                      }}
                    >
                      Отправить
                    </button>
                  </div>
                ) : (
                  <div>
                    Что-бы писать комментарии <Link to={"/login"}>войдите</Link>
                  </div>
                )}
              </div>
              <div className={"product-page__comments-container"}></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default ProductPage;
