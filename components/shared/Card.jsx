import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="wrapper grid grid-cols-2 md:grid-cols-4 gap-5">
      <Link href="/mobile-legend">
        <div className="bg-white py-4 px-5 cursor-pointer rounded-lg shadow-xl hover:shadow-2xl">
          <div className="group relative flex min-h-[100px] w-full max-w-[155px] md:max-w-[300px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all  md:min-h-[100px]">
            <Image
              src="/mobilelegend.png"
              width={800}
              height={500}
              className="rounded-lg hover:w-[1000px] bg-center"
            />
          </div>
          <p className="text-black p-14-medium text-center mt-3">
            Mobile Legend
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
