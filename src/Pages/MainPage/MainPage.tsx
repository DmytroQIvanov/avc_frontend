import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./MainPage.sass";
import isa from "./assets/225142156_507844300448740_3792213247938164490_n.jpg";
import background from "./../../assets/main_Image.png";
import logo from "../../assets/logo.svg";
import firstImg from "./assets/IMG_9379.jpg";
import secondImg from "./assets/IMG_9393.jpg";

export const MainPage = () => {
  const { t, i18n } = useTranslation();

  const carouselArray = [
    { img: isa, text: "Lol" },
    { img: isa, text: "Lol2" },
    { img: isa, text: "Lol3" },
  ];

  return (
    <div className="main-page">
      <div className={"main-page__background-container"}>
        <img src={background} className={"main-page__background"} />
      </div>
      <section className={"main-page__first-block"}>
        <h1>{t("main.title")}</h1>
        <div className={"main-page__description"}>{t("main.description")}</div>
        <h3>{t("main.subtitle")}</h3>
        <ul className={"main-page__list"}>
          <li>{t("nav-bar.sportsnutrition")}</li>
          <li>{t("nav-bar.equipment")}</li>
          <li>{t("nav-bar.clothing")}</li>
          <li>{t("nav-bar.vitamins")}</li>
        </ul>

        <Link to="/products">
          <button className="main-page__buy-button">
            {t("main.buy-button")}
          </button>
        </Link>
      </section>
      <section className={"main-page__second-block"}>
        <div className={"second-block__logo-container"}>
          <span>AVC - спонсор твоїх спортивних досягнень!</span>
          <img src={logo} className={"second-block__logo"} />
        </div>
        <img src={firstImg} className={"second-block__img1"} />
        <img src={secondImg} className={"second-block__img2"} />
      </section>

      {/*<Carousel*/}
      {/*  infiniteLoop={true}*/}
      {/*  showThumbs={false}*/}
      {/*  showStatus={false}*/}
      {/*  centerMode={true}*/}
      {/*  autoPlay={true}*/}
      {/*  interval={7500}*/}
      {/*>*/}
      {/*  {carouselArray.map((elem) => (*/}
      {/*    <div style={{ width: "400px", margin: "auto" }}>*/}
      {/*      <img src={elem.img} />*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</Carousel>*/}
    </div>
  );
};
