import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full mt-11">
      <div className="wrapper grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="w-full flex flex-col gap-5 md:mt-7">
        <h1 className="h1-bold">Selamat datang di <span className="text-gray-600">Hilmi TOPUP!!!</span></h1>
        <p className="p-16-medium text-gray-600">Top up murah aman dan terpercaya hanya di hilmi topup, menyediakan topup Mobile Legend murah aman dan terpercaya, yukk buruan beli</p>
        <Button className="w-40 bg-gray-600 hover:bg-gray-800 rounded-full py-6 px-12" size="lg">
            <Link href="/topupmobilelegend">
                Top up Sekarang
            </Link>
        </Button>
        </div>
        <Image 
        src="/hero.png"
        width={500}
        height={200}
        alt="hero foto"
        />
      </div>
    </section>
  );
};

export default Hero;
