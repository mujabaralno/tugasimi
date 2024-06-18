"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ListDiamonds } from "@/constants";
import Pembelian from "@/components/shared/Pembelian";
import CekNickgame from "@/components/shared/CekNickgame";
import { Button } from "@/components/ui/button";

const MobileLegendPage = () => {
  const router = useRouter();
  const [selectedDiamondPrice, setSelectedDiamondPrice] = useState(null);
  const [selectedDiamondLabel, setSelectedDiamondLabel] = useState(null);
  const [userId, setUserId] = useState("");
  const [server, setServer] = useState("");
  const [jumlahPembelian, setJumlahPembelian] = useState(1);
  const [username, setUsername] = useState("");

  const handleSelectDiamond = (price, label) => {
    const numericPrice = parseFloat(
      price.replaceAll("Rp", "").replace(".", "").replace(",", ".")
    );
    setSelectedDiamondPrice(numericPrice);
    setSelectedDiamondLabel(label);
  };

  const handleChangeJumlahPembelian = (newValue) => {
    setJumlahPembelian(newValue);
  };

  const handleUserIdChange = (newUserId) => {
    setUserId(newUserId);
  };

  const handleServerChange = (newServer) => {
    setServer(newServer);
  };

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  const handleBayarSekarang = () => {
    const data = {
      diamondPrice: selectedDiamondPrice,
      diamondLabel: selectedDiamondLabel,
      userId,
      server,
      username
    };
    localStorage.setItem("pembayaranData", JSON.stringify(data));
    router.push("/mobile-legend/pembayaran");
  };

  return (
    <section className="w-full">
      <div className="wrapper flex flex-col gap-5">
        <h3 className="h3-bold">Mobile Legends</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
          {ListDiamonds.map((item, i) => (
            <div
              key={i}
              className="bg-white py-4 px-5 cursor-pointer rounded-lg shadow-xl hover:shadow-2xl border border-gray-600"
              onClick={() => handleSelectDiamond(item.price, item.title)}
            >
              <div className="group relative flex overflow-hidden justify-center">
                <Image src={item.imgUrl} width={50} height={500} />
              </div>
              <p className="text-black p-14-medium text-center mt-3">
                {item.title}
              </p>
              <p className="text-black p-14-medium text-center mt-3">
                {item.desc}
              </p>
              <p className="text-gray-600 p-14-medium text-center mt-3">
                {item.price}
              </p>
            </div>
          ))}
        </div>
        <div>
          <Pembelian
            selectedDiamondPrice={selectedDiamondPrice}
            jumlahPembelian={jumlahPembelian}
            onJumlahPembelianChange={handleChangeJumlahPembelian}
          />
          <CekNickgame
            onUserIdChange={handleUserIdChange}
            onServerChange={handleServerChange}
            onUsernameChange={handleUsernameChange}
          />
          <div className="wrapper flex justify-between items-center mt-12">
            <div className="flex flex-row gap-5 items-center shadow-lg border border-gray-600 p-5 rounded-xl">
              <p className="p-24-bold">Pembelian:</p>
              <p className="p-18-semibold">{selectedDiamondLabel}</p>
              <p className="p-18-semibold">Rp.
                {selectedDiamondPrice ? selectedDiamondPrice.toFixed(3) : ""}
              </p>
              <p className="p-18-semibold">{username}</p>
            </div>
            <Button
              className="w-40 bg-gray-600 hover:bg-gray-800 rounded-full py-6 px-12"
              onClick={handleBayarSekarang}
            >
              Bayar Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileLegendPage;
