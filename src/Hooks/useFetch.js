import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const resData = await res.json();
      setData(resData);
    };
    getData();
  }, [url]);

  return { data };
}
