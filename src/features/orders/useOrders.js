import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";
import { useUser } from "../authentication/useUser";

export function useOrders() {
  const { user } = useUser();

  const {
    data: orders,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(user.id),
  });

  return { orders, isLoading, error };
}
