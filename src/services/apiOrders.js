import supabase from "./supabase";

export async function getOrders(customerId) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("customerId", customerId)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
}

export async function createOrder(newOrder) {
  const { data, error } = await supabase
    .from("orders")
    .insert([newOrder])
    .select();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}
