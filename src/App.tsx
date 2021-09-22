import React, { Suspense } from "react";
import Rout from "./Rout";
import "./i18n";
import { LoadingPage } from "./Pages/LoadingPage/LoadingPage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import MobileSearch from "./Components/MobileSearch/MobileSearch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Rout />
    </Suspense>
  );
}

export default App;
