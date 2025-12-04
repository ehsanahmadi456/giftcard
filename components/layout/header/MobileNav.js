"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AccountNav from "@/public/assets/icons/AccountNav";
import HomeNav from "@/public/assets/icons/HomeNav";
import MenuNav from "@/public/assets/icons/MenuNav";
import ShopNav from "@/public/assets/icons/ShopNav";
import React, { useEffect, useState } from "react";

function MobileNav() {
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchUserData();
    fetchCartData();
    
    const interval = setInterval(fetchCartData, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchUserData = async () => {
    try {
      const res = await fetch(`https://gift-card.ir/members/account.php`, {
        credentials: "include",
      });
      const data = await res.json();
      
      if (data.status === "1" && data.data) {
        setUser(data.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    }
  };

  const fetchCartData = async () => {
    try {
      const res = await fetch(`https://gift-card.ir/members/cart.php?op=query`, {
        credentials: 'include'
      });
      const data = await res.json();

      if (data.status === "1" && data.data) {
        const totalCount = data.data.reduce((sum, item) => {
          const count = Number(item[1]) || 0;
          return sum + count;
        }, 0);
        
        setCartCount(totalCount);
      } else {
        setCartCount(0);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setCartCount(0);
    }
  };

  const navItems = [
    { name: "خانه", href: "/", icon: <HomeNav /> },
    { name: "دسته بندی", href: "/products", icon: <MenuNav /> },
    { name: "سبد خرید", href: "/cart", icon: <ShopNav />, showBadge: true },
    { 
      name: user?.name ? "حساب من" : "حساب کاربری", 
      href: user?.name ? "/dashboard-account" : "/login", 
      icon: <AccountNav /> 
    },
  ];

  return (
    <div
      id="mobile-nav"
      className="flex justify-center items-center bg-white pb-12 pt-10 rounded-t-3xl shadow-[0_-35px_60px_-20px_rgba(0,0,0,0.3)] w-full fixed bottom-0 right-0 z-10 h-16 md:hidden transition-all duration-100 ease-linear overflow-hidden"
    >
      <div className="grid grid-cols-4 text-lowgray text-xs w-full max-w-sm sm:max-w-lg">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex flex-col mt-4 justify-center items-center gap-3 ${
                isActive ? "text-[#717171]" : ""
              }`}
            >
              <div className="relative w-6 h-6">
                {item.icon}
                {item.showBadge && cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </div>
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