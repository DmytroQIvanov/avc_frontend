import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AdminProducts from "./Components/AdminProducts/AdminProducts";
import AdminAddProductPage from "./Pages/AdminAddProductPage/AdminAddProductPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import AdminPosts from "./Pages/AdminPosts/AdminAddPosts";
import AdminAddPosts from "./Pages/AdminPosts/AdminAddPosts";

const AdminRout = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/addProduct">
          <AdminAddProductPage />
        </Route>
        <Route path="/admin/addPost">
          <AdminAddPosts />
        </Route>
        <Route path="/admin/posts">
          <AdminAddProductPage />
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
