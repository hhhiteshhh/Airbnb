import React from "react";
import Image from "next/image";

function SmallCard({ image, location, distance }) {
  return (
    <div className="flex p-3 items-center hover:bg-gray-100 m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16 ">
        <Image src={image} layout="fill" className="rounded-lg" />
      </div>
      <div className="">
        <h1 className="">{location}</h1>
        <p className="text-gray-500">{distance}</p>
      </div>
    </div>
  );
}

export default SmallCard;
