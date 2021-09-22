import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div>
      <h2>
        <Link to="/admin/products">Products</Link>
      </h2>
      <h2>
        <Link to="/admin/addPost">Posts</Link>
      </h2>
      <h2>
        <Link to="/admin/users">Users</Link>
      </h2>
      <h2>
        <Link to={"/admin/orders"}>Orders</Link>
      </h2>
    </div>
  );
};
export default AdminPage;
