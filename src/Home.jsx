import Bloglist from "./Bloglists";
import useFetch from "./useFetch";

const apiUrl = import.meta.env.VITE_API_URL;
const Homepage = () => {
  const { data, isPending, error } = useFetch(`${apiUrl}/blogs`);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {data && <Bloglist blogs={data} title={"All Blogs!"} />}
    </div>
  );
};

export default Homepage;
