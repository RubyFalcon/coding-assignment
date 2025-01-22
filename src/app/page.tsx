"use client";
import { useEffect, useState } from "react";
import ServerCard from "./components/serverCard";

// Define the type for the server data
type Server = {
  id: string;
  name: string;
  game: string;
  players: string;
  status: string;
  version: string;
  type: string;
  region: string;
  mods: string[];
  [key: string]: any; // To include any additional data from the API
};

export default function Home() {
  const [serverData, setServerData] = useState<Server[] | null>(null);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch("/api/mock");
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error("Failed to fetch server data:", error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <h1 className="text-2xl font-bold text-center sm:text-left">Minecraft Server List</h1>
        <p className="text-gray-600 text-center sm:text-left">
          Below is a list of Minecraft servers fetched from <code>/api/mock</code>.
        </p>
        <div className="grid gap-6 w-full max-w-4xl md:grid-cols-2 lg:grid-cols-3">
          {serverData ? (
            serverData.map((server) => <ServerCard key={server.id} server={server} />)
          ) : (
            <p className="text-gray-500">Loading server data...</p>
          )}
        </div>
      </main>
    </div>
  );
}
