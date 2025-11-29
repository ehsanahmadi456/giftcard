"use client";

import ArrowLeft from "@/public/assets/icons/ArrowLeft";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Item({ data }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/members/logout.php`,
        {
          method: "GET",
          mode: "no-cors",
          credentials: "include",
        }
      );
    } catch (error) {
      console.error("خطا در فراخوانی logout API:", error);
    }
    
    document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=gift-card.ir";
    document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.gift-card.ir";
    
    localStorage.removeItem("token");
    localStorage.removeItem("access_token");
    
    router.push("/");
  };

  const handleClick = (e) => {
    if (data.isLogout) {
      e.preventDefault();
      handleLogout();
    }
  };

  if (data.isLogout) {
    return (
      <button
        onClick={handleLogout}
        className="flex items-center justify-between border-b-[1px] last:border-none pb-4 last:pb-0 w-full text-right"
      >
        <span className="flex gap-1 items-center">
          {data.icon}
          {data.name}
        </span>
        {data.menu && <ArrowLeft />}
      </button>
    );
  }

  return (
    <Link
      href={data.href || "#"}
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