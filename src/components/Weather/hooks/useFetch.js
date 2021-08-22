import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const API_KEY = "908ad75f36452c11ff4306cd53162218";
      const response = await fetch(`${url}&appid=${API_KEY}`);
      const fetchedData = await response.json();

      const listByDay = fetchedData.list.filter((day) =>
        day.dt_txt.endsWith("15:00:00")
      );

      setData(fetchedData);
      setList(listByDay);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return { data, list, loading };
};

export default useFetch;
