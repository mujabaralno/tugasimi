import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { fetchDataFromAPI } from "@/app/api/api";

const CekNickgame = ({ onUserIdChange, onServerChange, onUsernameChange }) => {
  const [userId, setUserId] = useState("");
  const [server, setServer] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    if (!userId || !server) {
      setError("Masukkan ID dan Server terlebih dahulu");
      return;
    }

    try {
      setLoading(true);
      const fetchedUsername = await fetchDataFromAPI(userId, server);
      setUsername(fetchedUsername);
      onUsernameChange(fetchedUsername); 
      setError(null);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setError(error.message);
      setLoading(false); 
    }
  };

  return (
    <div className="bg-white shadow-xl shadow-purple-200/50 rounded-lg w-full p-7 flex flex-col gap-8 mt-12 border border-gray-600">
      <div className="flex flex-col md:flex-row justify-center gap-3">
        <div className="flex-center max-h-[48px] w-full overflow-hidden rounded-full bg-white/50 px-4 py-2 border border-gray-500">
          <Input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
              onUserIdChange(e.target.value); 
            }}
            className="p-regular-16 border-0 bg-white text-black outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <div className="flex-center max-h-[48px] w-full overflow-hidden rounded-full bg-white/50 px-4 py-2 border border-gray-500">
          <Input
            type="text"
            placeholder="Zone ID"
            value={server}
            onChange={(e) => {
              setServer(e.target.value);
              onServerChange(e.target.value); 
            }}
            className="p-regular-16 border-0 bg-white text-black outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>
      <Button
        className="w-40 bg-gray-600 hover:bg-gray-800 rounded-full py-6 px-12"
        onClick={handleFetch}
      >
        Cek ID
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}
      {username && (
        <div>
          <h2 className="h3-bold text-black">Username:</h2>
          <p className="p-medium-16 text-black">{username}</p>
        </div>
      )}
    </div>
  );
};

export default CekNickgame;
