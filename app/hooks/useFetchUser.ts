import { z } from "zod";
import { schema as originalSchema } from "../api/post/route";

// Extend the original schema to include the 'id' property
const extendedSchema = originalSchema.extend({
  id: z.number(), // or the appropriate type for 'id'
});

type Data = z.infer<typeof extendedSchema>
import { useState, useEffect } from "react";
export const useFetch = (url: string) => {
  const [data, setData] = useState<Data[]>();
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("error");
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const parsedData = await response.json();
        setData(parsedData);
        setError("error");
      } catch {
        setError(`${error} could not fetch data`);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, isloading, error };
};
