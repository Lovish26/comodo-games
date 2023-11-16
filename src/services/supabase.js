import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xawqkujehjfebptjshqk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhhd3FrdWplaGpmZWJwdGpzaHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzODM1MTcsImV4cCI6MjAxMzk1OTUxN30.ws2zSlONl-AssMFnkIHEm3TIGJXEaI45l8WbXP6dZJs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
