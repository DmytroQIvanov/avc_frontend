import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPostsStart } from "../../store/Slices/postSlice";

const AdminAddPosts = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  // const [name,setName] = useState("")

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsStart({ url: "/post" }));
  }, []);
  return (
    <div>
      <div>
        <p>Name</p>
        <input onChange={(elem) => setName(elem.target.value)} value={name} />
      </div>
      <div>
        <p>Content</p>
        <input
          onChange={(elem) => setContent(elem.target.value)}
          value={content}
          type="textarea"
        />
      </div>
      <button
        onClick={() => {
          dispatch(
            getPostsStart({
              url: "/post",
              data: { name, content },
              method: "POST",
            })
          );
        }}
      >
        Add Product
      </button>
    </div>
  );
};

export default AdminAddPosts;
