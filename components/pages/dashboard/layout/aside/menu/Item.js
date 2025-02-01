import ArrowLeft from "@/public/assets/icons/ArrowLeft";
import Link from "next/link";
import React from "react";

function Item({ data }) {
  return (
    <Link
      href="#"
      className="flex items-center justify-between border-b-[1px] last:border-none pb-4 last:pb-0"
    >
      <span className="flex gap-1 items-center">
        {data.icon}
        {data.name}
      </span>
      {data.menu && <ArrowLeft />}
    </Link>
  );
}

export default Item;
