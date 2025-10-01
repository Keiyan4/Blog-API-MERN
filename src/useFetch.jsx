import { useState, useEffect } from "react";

const useFetch = (url) => {
  console.log("Fetching:", url);
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch data");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => controller.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
