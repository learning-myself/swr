import useSWR from "swr";
import mainApi from "../api";

export default function useList() {
  const { data, mutate, error, isValidating } = useSWR(
    "getProducts",
    async () => {
      const { data } = await mainApi.get("products");
      return data;
    },
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      // revalidateOnMount: false,
      // revalidateOnReconnect: false,
      // refreshWhenOffline: false,
      // refreshWhenHidden: false,
      // refreshInterval: 0,
      // fetcher:
    }
  );

  // console.log(isValidating);

  return {
    data,
    mutate,
    isValidating,
    error,
  };
}
