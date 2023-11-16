import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getProducts({ filter, sortBy, page, search }) {
  let query = supabase.from("products").select("*", {
    count: "exact",
  });

  // FILTER
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  // SORT
  if (sortBy)
    query = query
      .order(sortBy.field, {
        ascending: sortBy.direction === "asc",
      })
      .order("created_at", { ascending: true }); // This second order is used so there are no duplicate results when two values are same as in case of rating.

  // PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  // SEARCH
  if (search) query = query.ilike(search.field, `%${search.value}%`);

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }

  return { data, count };
}

export async function getProduct(slug) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Product not loaded");
  }

  return data;
}

export async function editProduct(updatedQty, slug) {
  const { data, error } = await supabase
    .from("products")
    .update({ quantity: updatedQty })
    .eq("slug", slug)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Product could not be edited");
  }

  return data;
}
