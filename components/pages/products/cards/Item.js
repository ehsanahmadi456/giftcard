import Image from "next/image";
import Link from "next/link";
import React from "react";

function Item({ data }) {
  return (
    <Link
      href="#"
      className="p-3 text-center transition-all duration-100 ease-linear bg-white rounded-md hover:shadow-md"
    >
      <Image
        src={data.img}
        className="rounded-md"
        alt=""
      />
      <p className="mt-3 font-medium text-lowgray">{data.name}</p>
    </Link>
  );
}

export default Item;
