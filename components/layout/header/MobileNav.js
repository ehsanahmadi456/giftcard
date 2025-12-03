"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AccountNav from "@/public/assets/icons/AccountNav";
import HomeNav from "@/public/assets/icons/HomeNav";
import MenuNav from "@/public/assets/icons/MenuNav";
import ShopNav from "@/public/assets/icons/ShopNav";
import React from "react";

const navItems = [
  { name: "خانه", href: "/", icon: <HomeNav /> },
  { name: "دسته بندی", href: "/categories", icon: <MenuNav /> },
  { name: "سبد خرید", href: "/cart", icon: <ShopNav /> },
  { name: "حساب کاربری", href: "/account", icon: <AccountNav /> },
];

function MobileNav() {
  const pathname = usePathname();

  return (
    <div
      id="mobile-nav"
      className="flex justify-center items-center bg-white rounded-t-3xl shadow-[0_-35px_60px_-20px_rgba(0,0,0,0.3)] w-full fixed bottom-0 right-0 z-10 h-16 md:hidden transition-all duration-100 ease-linear overflow-hidden"
    >
      <div className="grid grid-cols-4 text-lowgray text-xs w-full max-w-sm sm:max-w-lg">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex flex-col justify-center items-center gap-3 ${
                isActive ? "text-[#717171]" : ""
              }`}
            >
              {item.icon}
              <span
                className={`relative flex justify-center before:absolute before:w-[75px] before:h-1 before:bg-[#717171] before:rounded-lg before:-bottom-2 ${
                  isActive ? "before:block" : "before:hidden"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MobileNav;
