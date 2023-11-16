import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useProducts() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // 1) FILTER
  const filterValue = searchParams.get("discount") || "all";

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : filterValue === "with-discount"
      ? {
          field: "discount",
          value: 0,
          method: "gt",
        }
      : {
          field: "discount",
          value: 0,
          method: "eq",
        };

  // 2) SORT
  const sortByRaw = searchParams.get("sortBy") || "rating-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // 3) PAGINATION
  let page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // 4) SEARCH RESULTS
  const searchValue = searchParams.get("search");

  const search = !searchValue
    ? null
    : {
        field: "name",
        value: searchParams.get("search"),
      };

  // QUERY
  const {
    data: { data: products, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", filter, sortBy, page, search],
    queryFn: () => getProducts({ filter, sortBy, page, search }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["products", filter, sortBy, page + 1, search],
      queryFn: () => getProducts({ filter, sortBy, page: page + 1, search }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["products", filter, sortBy, page - 1, search],
      queryFn: () => getProducts({ filter, sortBy, page: page - 1, search }),
    });

  return { products, isLoading, error, count };
}
