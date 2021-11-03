import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AdminProducts from "./Pages/AdminProducts/AdminProducts";
import AdminAddProductPage from "./Pages/AdminAddProductPage/AdminAddProductPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import AdminPosts from "./Pages/AdminPosts/AdminAddPosts";
import AdminAddPosts from "./Pages/AdminPosts/AdminAddPosts";
import AdminUsersPage from "./Pages/AdminUsersPage/AdminUsersPage";
import AdminProductUpdate from "./Pages/AdminProductUpdate/AdminProductUpdate";
import AdminOrdersPage from "./Pages/AdminOrdersPage/AdminOrdersPage";

const AdminRout = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/addProduct">
          <AdminAddProductPage />
        </Route>
        <Route path="/admin/updateProduct/:id">
          <AdminProductUpdate />
        </Route>
        <Route path="/admin/addPost">
          <AdminAddPosts />
        </Route>
        <Route path="/admin/posts">
          <AdminAddProductPage />
        </Route>

        <Route path="/admin/orders">
          <AdminOrdersPage />
        </Route>

        <Route path="/admin/users">
          <AdminUsersPage />
        </Route>
        <Route path="/admin/products">
          <AdminProducts />
        </Route>

        <Route path="/admin">
          <AdminPage />
        </Route>
      </Switch>
      <Redirect to="/admin" />
    </Router>
  );
};

export default AdminRout;
