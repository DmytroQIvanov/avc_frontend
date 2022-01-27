import { lazy } from "react";

import { Redirect } from "react-router-dom";
import { BottomPanel } from "./Components/BottomPanel/BottomPanel";
import { Header } from "./Components/Header/Header";
import { NavBar } from "./Components/NavBar/NavBar";
import { MainPage } from "./Pages/MainPage/MainPage";
import { SubNavBar } from "./Components/SubNavBar/SubNavBar";
import NotificationPage from "./Pages/NotificationPage/NotificationPage";
import FavouritePage from "./Pages/FavouritePage/FavouritePage";

//Lazy Loading
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));
const RestoreLoginPage = lazy(() => import("./Pages/RestoreLoginPage/RestoreLoginPage"))
const ProductPage = lazy(() => import("./Pages/ProductPage/ProductPage"));

const UserMenu = lazy(() => import("./Pages/UserMenu/UserMenu"));
const OrderPage = lazy(() => import("./Pages/OrderPage/OrderPage"));
const ProductsPage = lazy(() => import("./Pages/ProductsPage/ProductsPage"));
const PostsPage = lazy(() => import("./Pages/PostsPage/PostsPage"));
const PostPage = lazy(() => import("./Pages/PostPage/PostPage"));
const RegistrationPage = lazy(
  () => import("./Pages/RegistrationPage/RegistrationPage")
);
const AdminLoginPage = lazy(
  () => import("./Pages/AdminLoginPage/AdminLoginPage")
);
const BasketPage = lazy(() => import("./Pages/BasketPage/BasketPage"));

const routes = [
  {
    path: "/products",
    exact: true,
    navbar: () => (
      <>
        <Header />
        <SubNavBar />
      </>
    ),
    bottomPanel: () => <BottomPanel />,
    main: () => <ProductsPage />,
  },
  {
    path: "/order",
    exact: true,
    navbar: () => (
      <>
        <Header />
      </>
    ),
    main: () => <OrderPage />,
  },
  {
    path: "/favourite",
    exact: true,
    navbar: () => (
      <>
        <Header />
      </>
    ),
    main: () => <FavouritePage />,
  },
  {
    path: "/notifications",
    exact: true,
    navbar: () => (
      <>
        <Header />
      </>
    ),
    main: () => <NotificationPage />,
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
    bottomPanel: () => <BottomPanel />,
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
    path: ["/admin/login", "/admin", "/admin/*"],
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
    bottomPanel: () => <BottomPanel />,
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
    path: "/restore",
    exact: true,
    navbar: () => (
      <>
        <Header />
      </>
    ),
    main: () => <RestoreLoginPage />,
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
    path: "/user/:id",
    exact: true,
    navbar: () => (
      <>
        <Header />
        <NavBar />
      </>
    ),
    main: () => <UserMenu />,
  },
  {
    path: "*",
    // exact: true,
    // navbar: () => <></>,
    main: () => <Redirect to="/" />,
  },
];

export default routes;
