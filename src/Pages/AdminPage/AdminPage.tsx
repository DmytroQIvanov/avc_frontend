import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div>
      <Link to="/admin/products">Products</Link>
      <Link to="/admin/addPost">Posts</Link>
    </div>
  );
};
export default AdminPage;
