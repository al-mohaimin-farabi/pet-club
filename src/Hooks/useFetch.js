import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getData() {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => {
          setError(error);
        })
        .finally(() => setIsLoading(false));
    }
    getData();
  }, [url]);

  return { data, isLoading, error };
}
