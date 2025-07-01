import { createClient } from "@/lib/database/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    const database = createClient();

    // Parse queries
    let query = (await database).from('developer').select('*');
    const {data, error} = await query;

    if(error){
        return NextResponse.json({error: error.message}, {status: 500});
    }

    return NextResponse.json(data)
}