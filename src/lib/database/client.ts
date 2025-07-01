import { createBrowserClient } from "@supabase/ssr";


const databaseUrl = process.env.NEXT_PUBLIC_DB_URL!;
const databaseKey = process.env.NEXT_PUBLIC_DB_KEY!;

// export const database = createClient(databaseUrl, databaseKey)
export function createClient(){
    return createBrowserClient(
        databaseUrl,
        databaseKey
    )
}