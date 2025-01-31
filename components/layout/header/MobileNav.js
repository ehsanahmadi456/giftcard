import AccountNav from "@/public/assets/icons/AccountNav";
import HomeNav from "@/public/assets/icons/HomeNav";
import MenuNav from "@/public/assets/icons/MenuNav";
import ShopNav from "@/public/assets/icons/ShopNav";
import React from "react";

function MobileNav() {
  return (
    <div
      id="mobile-nav"
      className="flex justify-center items-center bg-white rounded-t-3xl shadow-[0_-35px_60px_-20px_rgba(0,0,0,0.3)] w-full fixed bottom-0 right-0 z-10 h-16 md:hidden transition-all duration-100 ease-linear overflow-hidden"
    >
      <div className="grid grid-cols-4 text-lowgray text-xs w-full max-w-sm sm:max-w-lg">
        <div className="group active flex flex-col justify-center items-center gap-3">
          <HomeNav />
          <span className="relative flex justify-center before:hidden group-[.active]:before:block before:absolute before:w-[75px] before:h-1 before:bg-[#717171] before:rounded-lg before:-bottom-2">
            خانه
          </span>
        </div>
        <div className="group flex flex-col justify-center items-center gap-3">
          <MenuNav />
          <span className="relative flex justify-center before:hidden group-[.active]:before:block before:absolute before:w-[75px] before:h-1 before:bg-[#717171] before:rounded-lg before:-bottom-2">
            دسته بندی
          </span>
        </div>
        <div className="group flex flex-col justify-center items-center gap-3">
          <ShopNav />
          <span className="relative flex justify-center before:hidden group-[.active]:before:block before:absolute before:w-[75px] before:h-1 before:bg-[#717171] before:rounded-lg before:-bottom-2">
            سبد خرید
          </span>
        </div>
        <div className="group flex flex-col justify-center items-center gap-3">
          <AccountNav />
          <span className="relative flex justify-center group-[.active]:text-[#717171] before:hidden group-[.active]:before:block before:absolute before:w-[75px] before:h-1 before:bg-[#717171] before:rounded-lg before:-bottom-2">
            حساب کاربری
          </span>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
