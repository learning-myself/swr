import useSWR from "swr";
import mainApi from "../api";

export default function useList() {
  const { data, mutate, error } = useSWR(
    "getProducts",
    async () => {
      const { data } = await mainApi.get("products");
      return data;
    },
    {
      revalidateOnFocus: false,
      // revalidateOnMount: false,
      // revalidateOnReconnect: false,
      // refreshWhenOffline: false,
      // refreshWhenHidden: false,
      // refreshInterval: 0,
      // fetcher:
    }
  );

  return {
    data,
    mutate,
    error,
  };
}
