import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const request = await fetch(url);
      const response = await request.json();
      setData(response);
    };
    getData();
  }, [url]);

  return { data };
}
