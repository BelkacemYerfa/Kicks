import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetch = (method, url) => {
  const { data, isLoading, error } = useQuery(["data"], async () => {
    const response = await axios[method](url);
    return response.data;
  });
  return [data, isLoading, error];
};

export default useFetch;
