import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Redirect } from "react-router-dom";

const FavouritePage = () => {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) {
    return <Redirect to={"/login"}>Увійдіть</Redirect>;
  }
  return <div>{user.favourite.map((elem) => elem.name)}</div>;
};

export default FavouritePage;
