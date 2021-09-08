import LoadingAVC from "../../assets/logo.svg";
import "./LoadingPage.sass";

export const LoadingPage = () => {
  return (
    <div className="loading-page">
      <img src={LoadingAVC} className="loading-page__img" />
    </div>
  );
};
