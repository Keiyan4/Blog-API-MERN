import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const apiUrl = import.meta.env.VITE_API_URL;

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(` ${apiUrl}/blogs/${id}`);

  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(` ${apiUrl}/blogs/${id}`, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };

  return (
    <div className="blog-details">
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
        </article>
      )}
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
};

export default BlogDetails;
