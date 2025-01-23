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
  onToggleStatus: () => void;
};

const ServerCard: React.FC<ServerCardProps> = ({ server,onToggleStatus }) => {
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
      <button
        className="mt-4 px-20 py-2 bg-purple-700 text-white rounded hover:bg-purple-900"
        onClick={onToggleStatus}
      >
        {server.status === "online" ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default ServerCard;
