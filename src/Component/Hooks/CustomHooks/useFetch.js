import { useEffect, useState } from "react";

function useFetch(url) {
  const [Data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Data Fetch Faild, please check your api request");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setData(data);
          setisLoading(false);
          seterror(null);
        })
        .catch((err) => {
          seterror(err.message);
          setisLoading(false);
        });
    }, 4000);
  }, [url]);
  return { Data, isLoading, error };
}

export default useFetch;
