import { useState } from "react";
import { useNavigate } from "react-router";

const apiUrl = import.meta.env.VITE_API_URL;

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, author, body };

    setIsPending(true);

    fetch(`${apiUrl}/blogs`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then(() => {
        setIsPending(false);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setIsPending(false);
      });
  };
  return (
    <div className="create">
      <h2>Add New Blog</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="title">Blog title:</label>
        </div>
        <div className="input-box">
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <label htmlFor="author">Blog author:</label>
        </div>
        <div className="input-box">
          <textarea
            name="body"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
          <label htmlFor="body">Blog body:</label>
        </div>

        {!isPending && <button type="submit">Add Blog</button>}
        {isPending && (
          <button disabled type="submit">
            Adding BLog...
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
