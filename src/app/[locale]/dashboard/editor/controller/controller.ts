"use server"

import { database } from "@/lib/database/client";
import z from "zod";



const DeveloperSchema = z.object({
    id: z.number(),
    name: z.string()
})
export type Developer = z.infer<typeof DeveloperSchema>;



const EngineSchema = z.object({
    id: z.number(),
    name: z.string()
})
export type Engine = z.infer<typeof EngineSchema>;


export async function getAllDeveloper(): Promise<Developer[]> {
    const { data, error} = await database
    .from("developer").select("id, name").order("name", {ascending: true})

    if (error) {
        console.error("Error: ", error.message);
        return [];
    }

    const parsed = z.array(DeveloperSchema).safeParse(data);
    if (!parsed.success){
        console.error("Failed: ", parsed.error)
        return[];
    }

    return parsed.data;
}

export async function getAllEngine(): Promise<Engine[]> {
    const { data, error} = await database
    .from("engine").select("id, name").order("name", {ascending: true})

    if (error) {
        console.error("Error: ", error.message);
        return [];
    }

    const parsed = z.array(EngineSchema).safeParse(data);
    if (!parsed.success){
        console.error("Failed: ", parsed.error)
        return[];
    }

    return parsed.data;
}