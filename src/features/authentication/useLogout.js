import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export function useLogout() {
  const navigate = useNavigate();
  const { setCart } = useCart();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries(); // removes all queries from react-query
      navigate("/login", { replace: true });
      setCart([]);
    },
  });

  return { logout, isLoading };
}
