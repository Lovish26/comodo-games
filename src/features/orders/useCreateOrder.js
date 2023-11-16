import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder as createOrderApi } from "../../services/apiOrders";
import toast from "react-hot-toast";

export function useCreateOrder() {
  const queryClient = useQueryClient();

  const { mutate: createOrder, isLoading: isCreatingOrder } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: () => {
      toast.success("Order placed successfully.");
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createOrder, isCreatingOrder };
}
