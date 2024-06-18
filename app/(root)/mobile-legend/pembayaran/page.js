"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PembayaranPage = () => {
  const [params, setParams] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("pembayaranData");
    if (data) {
      setParams(JSON.parse(data));
    }
  }, []);

  if (!params) {
    return <div>Loading...</div>;
  }

  const { diamondLabel, diamondPrice, userId, server, username } = params;

  return (
    <section className="w-full ">
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col  gap-5 bg-white border border-gray-600 p-5 rounded-xl shadow-lg ">
          <h3 className="h3-bold">Pembayaran</h3>
          <p className="p-16-medium">Diamond Label: {diamondLabel}</p>
          <p className="p-16-medium">Diamond Price: Rp.{diamondPrice.toFixed(3)}</p>
          <p className="p-16-medium">User ID: {userId}</p>
          <p className="p-16-medium">Server: {server}</p>
          <p className="p-16-medium">Username: {username}</p>
        </div>
        <div className="flex flex-col  gap-5 bg-white border border-gray-600 p-5 rounded-xl shadow-lg">
            <Image 
            src="/qrisss.png"
            width={1000}
            height={1000}
            alt="qris"
            />
        </div>
      </div>
      <div className="wrapper flex justify-center items-center">
        <Link href="/paymentsuccess">
            <Button className="w-40 bg-gray-600 hover:bg-gray-800 rounded-full py-6 px-12">
                Continue
            </Button>
        </Link>
      </div>
    </section>
  );
};

export default PembayaranPage;
