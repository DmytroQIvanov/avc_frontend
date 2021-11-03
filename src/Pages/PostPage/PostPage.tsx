import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostsStart, getPostStart } from "../../store/Slices/postSlice";
import { RootState } from "../../store/store";
import "./PostPage.sass";

const PostPage = () => {
  const post = useSelector((state: RootState) => state.posts.post);
  const dispatch = useDispatch();
  const params: { id: string } = useParams();
  useEffect(() => {
    dispatch(getPostStart({ url: `/post/${params.id}` }));
  }, []);
  return (
    <div>
      <div className={"post-page"}>
        <h1>{post?.name}</h1>
        <h4 className={"post-page__description"}>{post?.content}</h4>
      </div>
    </div>
  );
};
export default PostPage;
