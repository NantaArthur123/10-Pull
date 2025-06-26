import { createClient } from "@supabase/supabase-js";

const databaseUrl = process.env.NEXT_PUBLIC_DB_URL!;
const databaseKey = process.env.NEXT_PUBLIC_DB_KEY!;

export const database = createClient(databaseUrl, databaseKey)