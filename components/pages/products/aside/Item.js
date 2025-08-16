"use client";

import { useState } from "react";
import Link from "next/link";
import ArrowLeft from "@/public/assets/icons/ArrowLeft";

function Item({ data }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`group flex flex-col gap-4 border-b-[1px] last:border-none pb-4 last:pb-0
        ${active ? "active" : ""}`}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <span className="flex gap-1">
          {/* <Image src={data.icon} width={20} height={20} alt="icon-cart" /> */}
          <Link href="#" className="font-medium text">
            {data.name}
          </Link>
        </span>
        <div className="cursor-pointer action-button">
          <svg
            className="hidden group-[.active]:block"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.9199 22.75C5.99992 22.75 1.16992 17.93 1.16992 12C1.16992 6.07 5.99992 1.25 11.9199 1.25C17.8399 1.25 22.6699 6.07 22.6699 12C22.6699 17.93 17.8499 22.75 11.9199 22.75ZM11.9199 2.75C6.81992 2.75 2.66992 6.9 2.66992 12C2.66992 17.1 6.81992 21.25 11.9199 21.25C17.0199 21.25 21.1699 17.1 21.1699 12C21.1699 6.9 17.0199 2.75 11.9199 2.75Z"
              fill="#0C0A18"
            />
            <path
              d="M15.9199 12.75H7.91992C7.50992 12.75 7.16992 12.41 7.16992 12C7.16992 11.59 7.50992 11.25 7.91992 11.25H15.9199C16.3299 11.25 16.6699 11.59 16.6699 12C16.6699 12.41 16.3399 12.75 15.9199 12.75Z"
              fill="#0C0A18"
            />
          </svg>
          <svg
            className="block group-[.active]:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
              fill="#0C0A18"
            />
            <path
              d="M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
              fill="#0C0A18"
            />
            <path
              d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z"
              fill="#0C0A18"
            />
          </svg>
        </div>
      </div>
      <div className="hidden group-[.active]:flex flex-col gap-4 text-sm text-lowgray mt-2">
        {data.menu &&
          !!data.menu.length &&
          data.menu.map((item, idx) => (
            <Link
              href="#"
              key={idx}
              className="flex items-center justify-between"
            >
              {item.name}
              <ArrowLeft />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Item;
