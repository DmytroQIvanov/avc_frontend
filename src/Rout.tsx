import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRout from "./AdminRout";
import { LoadingPage } from "./Pages/LoadingPage/LoadingPage";
import routes from "./routes";
import { userChangeLanguage, userLoginStart } from "./store/Slices/userSlice";
import { RootState } from "./store/store";
import { useTranslation } from "react-i18next";
import { match } from "assert";
import { CSSTransition } from "react-transition-group";
import MobileSearch from "./Components/MobileSearch/MobileSearch";
import ControlSidePanel from "./Components/ControlSidePanel/ControlSidePanel";
import MobileControlBar from "./Components/MobileControlBar/MobileControlBar";
import BurgerSidePanel from "./Components/BurgetSidePanel/BurgerSidePanel";

const Rout = () => {
  const adminlogin = useSelector((state: RootState) => state.admin.login);
  const firstFetch = useSelector((state: RootState) => state.user.firstFetch);

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    const localLanguage = localStorage.getItem("language");
    if (localLanguage == "en") {
      dispatch(userChangeLanguage("en"));
      i18n.changeLanguage("en");
    } else {
      dispatch(userChangeLanguage("ua"));
      i18n.changeLanguage("ua");
    }
  }, []);

  useEffect(() => {
    dispatch(userLoginStart({ url: "/user/auth", method: "POST" }));
  }, []);
  if (adminlogin) return <AdminRout />;

  if (!firstFetch) {
    return <LoadingPage />;
  }

  return (
    <Suspense fallback={<LoadingPage />}>
      <Router>
        {/*<MobileSearch />*/}
        {/*<ControlSidePanel />*/}
        {/*<BurgerSidePanel />*/}
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={route.navbar}
            />
          ))}
        </Switch>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              // children={route.main}
            >
              {({ match }) => (
                <CSSTransition
                  timeout={3000}
                  classNames={"page"}
                  onmountOnExit
                  in={match != null}
                >
                  {route.main}
                </CSSTransition>
              )}
            </Route>
          ))}
        </Switch>
        {/*<Switch>*/}
        {/*  {routes.map((route, index) => (*/}
        {/*    <Route*/}
        {/*      key={index}*/}
        {/*      path={route.path}*/}
        {/*      exact={route.exact}*/}
        {/*      children={route.bottomPanel}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</Switch>*/}
      </Router>
    </Suspense>
  );
};
export default Rout;
