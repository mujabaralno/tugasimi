import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full">
      <div className="wrapper flex justify-between items-center">
        <Link className="" href="/">
          <Image src="/next.svg" width={100} height={100} alt="logo" />
        </Link>
        <nav className="w-full md:flex hidden justify-end items-center">
          <ul className="flex flex-col md:flex-row gap-5 ">
            <li className="p-16-medium text-black">
              <Button size="lg" className="w-40 bg-gray-600 hover:bg-gray-800 rounded-full py-6 px-12">
                <Link href="/mobile-legend">Mobile Legend</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
