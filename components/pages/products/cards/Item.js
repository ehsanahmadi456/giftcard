import Image from "next/image";
import Link from "next/link";
import React from "react";

function Item({ data }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  return (
    <Link
      href="#"
      className="p-3 text-center transition-all duration-100 ease-linear bg-white rounded-md hover:shadow-md"
    >
      <Image
        src={`${API_URL}/prod-images/${data.pid}.jpg`}
        width={100}
        height={60}
        className="rounded-md w-full h-[170px] object-contain"
        alt=""
      />
      <p className="mt-3 font-medium text-lowgray">{data.name}</p>
    </Link>
  );
}

export default Item;
