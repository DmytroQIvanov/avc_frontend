import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPostsStart } from "../../store/Slices/postSlice";
import { RootState } from "../../store/store";
import { Loader } from "../../Components/Loader/Loader";

const PostsPage = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.product.loading);

  useEffect(() => {
    dispatch(getPostsStart({ url: "/post" }));
  }, []);
  return (
    <div>
      {loading && <Loader />}
      {posts.map((elem) => (
        <div>
          <Link to={`/post/${elem.id}`}>
            <h2>{elem.name}</h2>
          </Link>
          <h4>{elem.content}</h4>
        </div>
      ))}
    </div>
  );
};
export default PostsPage;
