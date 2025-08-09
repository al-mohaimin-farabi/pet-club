import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";

// export default function useFetch(url) {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");
//   useEffect(() => {
//     async function getData() {
//       await fetch(url)
//         .then((res) => res.json())
//         .then((data) => setData(data))
//         .catch((error) => {
//           setError(error);
//         })
//         .finally(() => setIsLoading(false));
//     }
//     getData();
//   }, [url]);

//   return { data, isLoading, error };
// }

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true; // Prevent state updates if unmounted
    async function getData() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (isMounted) setData(json);
      } catch (error) {
        if (isMounted) setError(error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    getData();
    return () => {
      isMounted = false; // Cleanup
    };
  }, [url]);

  return { data, isLoading, error };
}

// export default function useFetch(key, url) {
//   const fetchData = async () => {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error("Network response was not ok");
//     return res.json();
//   };

//   const { data, isLoading, error } = useQuery([key], fetchData);

//   return { data, isLoading, error };
// }
