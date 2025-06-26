"use client";

import { database } from "@/lib/databaseClient";
import { useEffect, useState } from "react";

export default function TestSupabase() {
  const [status, setStatus] = useState("Connecting...");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await database
        .from("Category")
        .select("*")
        .limit(1);
      if (error) {
        console.error("connection failed ", error);
        setStatus("Check Console");
      } else {
        console.log("Connected ", data);
        setStatus("Connected");
        setData(data);
      }
    };
    testConnection();
  }, []);

  return (
    <div>
      <h1>
        {status}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </h1>
    </div>
  );
}
