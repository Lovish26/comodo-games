import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts";
import { useParams } from "react-router-dom";

export function useProduct() {
  const { productSlug } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(productSlug),
    retry: false,
  });

  return { product, isLoading, error };
}
