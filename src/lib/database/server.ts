import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";


const databaseUrl = process.env.NEXT_PUBLIC_DB_URL!;
const databaseKey = process.env.NEXT_PUBLIC_DB_KEY!;

export async function createClient() {
    const cookieStore = await cookies()

    return createServerClient(
        databaseUrl,
        databaseKey,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet){
                    try {
                        cookiesToSet.forEach(({name, value, options }) => {
                            cookieStore.set(name, value , options)
                        });
                    } catch {

                    }
                }
            }
        }
    )
    
}