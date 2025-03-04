import { useQuery } from "@tanstack/react-query";
import { fetchCryptoPrices } from "./api";

export const useCryptoPrices = () => {
  return useQuery({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoPrices,
    refetchInterval: 30000,
  });
};
