"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url: string) => {
  const [data, setData] = useState<any | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData([response.data.allLandingPages[0]]);
      } catch (err: any) {
        console.log("Error while fetching data", err);
        throw new Error("Error while fetching data", err);
      }
    };
    fetchData();
  }, [url]);

  return data;
};

export default useFetchData;
