"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Pembelian = ({ selectedDiamondPrice, jumlahPembelian, onJumlahPembelianChange }) => {
  const [totalHarga, setTotalHarga] = useState(selectedDiamondPrice * jumlahPembelian);

  useEffect(() => {
    setTotalHarga(selectedDiamondPrice * jumlahPembelian);
  }, [selectedDiamondPrice, jumlahPembelian]);

  return (
    <div className="bg-white shadow-xl border flex flex-col gap-3 border-gray-600 shadow-purple-200/50 rounded-lg w-full p-7 mt-12">
      <h3 className="h3-bold text-black">Metode Pembayaran</h3>
      <p className="p-16-medium text-black">Qris</p>
      <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-1 lg:grid-cols-2 xl:gap-5 cursor-pointer">
        <div className="relative flex max-h-[100px] p-5 w-full  flex-col overflow-hidden rounded-xl bg-white/50 border-black/50 transition-all md:max-h-[130px] border cursor-pointer hover:bg-gray-600/10">
          <div className="flex justify-between items-center">
            <div className="flex flex-row items-center gap-3">
              <Image src="/qris.webp" width={50} height={50} />
              <p className="p-16-medium text-black/80">Qris</p>
              <div className="flex justify-end text-black w-32 md:w-[14rem]">
                <p className="p-medium-16 text-gray-600">
                  Rp. {totalHarga.toFixed(3)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Pembelian;
