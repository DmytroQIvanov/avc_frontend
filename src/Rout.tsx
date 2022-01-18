import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRout from "./AdminRout";
import { LoadingPage } from "./Pages/LoadingPage/LoadingPage";
import routes from "./routes";
import { userLoginStart } from "./store/Slices/userSlice";
import { RootState } from "./store/store";
import { useTranslation } from "react-i18next";
import { CSSTransition } from "react-transition-group";
import MobileSearch from "./Components/MobileSearch/MobileSearch";
import ControlSidePanel from "./Components/ControlSidePanel/ControlSidePanel";
import BurgerSidePanel from "./Components/BurgetSidePanel/BurgerSidePanel";

const Rout = () => {
  const adminlogin = useSelector((state: RootState) => state.admin.login);
  const firstFetch = useSelector((state: RootState) => state.user.firstFetch);

  const dispatch = useDispatch();
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
        <MobileSearch />
        {/*<ControlSidePanel />*/}
        <BurgerSidePanel />
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
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={route.bottomPanel}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
};
export default Rout;
