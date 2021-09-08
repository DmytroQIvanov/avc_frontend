import { lazy } from "react";

import { Redirect } from "react-router-dom";
import { BottomPanel } from "./Components/BottomPanel/BottomPanel";
import { Header } from "./Components/Header/Header";
import MobileControlBar from "./Components/MobileControlBar/MobileControlBar";
import { NavBar } from "./Components/NavBar/NavBar";
import AdminLoginPage from "./Pages/AdminLoginPage/AdminLoginPage";
import BasketPage from "./Pages/BasketPage/BasketPage";
import { MainPage } from "./Pages/MainPage/MainPage";
import PostPage from "./Pages/PostPage/PostPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import OrderPage from "./Pages/OrderPage/OrderPage";

//Lazy Loading
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));
const ProductPage = lazy(() => import("./Pages/ProductPage/ProductPage"));

const routes = [
  {
    path: "/products",
    exact: true,
    navbar: () => <Header />,
    bottomPanel: () => <BottomPanel />,
    main: () => <ProductsPage />,
  },
  {
    path: "/order",
    exact: true,
    navbar: () => (
      <>
        <Header />
        <MobileControlBar />
      </>
    ),
    // bottomPanel: () => <BottomPanel />,
    main: () => <OrderPage />,
  },
  {
    path: "/",
    exact: true,
    navbar: () => (
      <>
        <Header />
        <NavBar />
      </>
    ),
    main: () => <MainPage />,
  },
  {
    path: "/posts",
    exact: true,
    navbar: () => (
      <>
        <Header />
        <NavBar />
      </>
    ),
    main: () => <PostsPage />,
  },
  {
    path: "/post/:id",
    exact: true,
    navbar: () => (
      <>
        <Header />
        <NavBar />
      </>
    ),
    main: () => <PostPage />,
  },
  {
    path: ["/admin/login", "/admin"],
    exact: true,
    navbar: () => <></>,
    main: () => <AdminLoginPage />,
  },
  {
    path: "/product/:id",
    exact: true,
    navbar: () => (
      <>
        <Header />
        <NavBar />
      </>
    ),
    main: () => <ProductPage />,
  },
  {
    path: "/login",
    exact: true,
    navbar: () => (
      <>
        <Header />
      </>
    ),
    main: () => <LoginPage />,
  },
  {
    path: "/registration",
    exact: true,
    navbar: () => (
      <>
        <Header />
      </>
    ),
    main: () => <RegistrationPage />,
  },
  {
    path: "/basket",
    exact: true,
    navbar: () => (
      <>
        <Header />
        <NavBar />
      </>
    ),
    main: () => <BasketPage />,
  },
  {
    path: "*",
    // exact: true,
    // navbar: () => <></>,
    main: () => <Redirect to="/" />,
  },
];

export default routes;
