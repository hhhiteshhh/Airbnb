import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex hover:shadow-xl border-b cursor-pointer py-7 px-2 hover:first:opacity-80 hover:rounded-xl transition transform ease-out duration-200 first:border-t">
      <div className="relative h-54 w-48 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl "
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex items-center justify-between">
          <p className="flex-grow ">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div className="flex flex-col">
            <p className="text-lg font-semibold pb-2 lg:text-2xl ">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
