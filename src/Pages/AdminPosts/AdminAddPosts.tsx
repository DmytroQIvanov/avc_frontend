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
        <input
          onChange={(elem) => setName(elem.target.value)}
          value={name}
          className={"default-input"}
        />
      </div>
      <div>
        <p>Content</p>
        <textarea
          onChange={(elem) => setContent(elem.target.value)}
          value={content}
          className={"default-input"}
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
        className={"yellow-button"}
      >
        Add Post
      </button>
    </div>
  );
};

export default AdminAddPosts;
