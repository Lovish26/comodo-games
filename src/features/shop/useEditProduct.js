import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProduct as editProductApi } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useEditProduct() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editProduct } = useMutation({
    mutationFn: ({ updatedQty, slug }) => editProductApi(updatedQty, slug),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editProduct, isEditing };
}
