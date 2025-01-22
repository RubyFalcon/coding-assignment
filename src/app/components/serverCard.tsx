// src/components/ServerCard.tsx
import React from "react";

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
};

type ServerCardProps = {
  server: Server;
};

const ServerCard: React.FC<ServerCardProps> = ({ server }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">{server.name}</h2>
      <p className="text-gray-600">Game: {server.game}</p>
      <p className="text-gray-600">Players: {server.players}</p>
      <p
        className={`text-sm font-medium mt-2 ${
          server.status === "online" ? "text-green-600" : "text-red-600"
        }`}
      >
        Status: {server.status}
      </p>
      <p className="text-gray-600">Version: {server.version}</p>
    </div>
  );
};

export default ServerCard;
