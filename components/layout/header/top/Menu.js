"use client";

import BagHeader from "@/public/assets/icons/BagHeader";
import DollarGreen from "@/public/assets/icons/DollarGreen";
import ExitHeader from "@/public/assets/icons/ExitHeader";
import HeartHeader from "@/public/assets/icons/HeartHeader";
import SettingHeader from "@/public/assets/icons/SettingHeader";
import StarYellow from "@/public/assets/icons/StarYellow";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function Menu() {
  const [user, setUser] = useState({})

  useEffect(() => {
    const cook = Cookies.get("access_token")
    if (!cook) return
    // setUser({})
  },[])

  return user.name && (
    <div className="flex-col p-4 bg-white absolute z-50 left-0 w-64 text-xs hidden group-hover:flex">
      <div className="flex flex-col gap-4 pb-4 border-b">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <i className="w-6 h-6 bg-[#23BAA7] flex justify-center items-center rounded-full">
              <DollarGreen />
            </i>
            <p>موجودی کیف پول</p>
          </div>
          <p className="text-lowgray">۲۵۶٬۰۰۰ تومان</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <i className="w-6 h-6 bg-[#FFC245] flex justify-center items-center rounded-full">
              <StarYellow />
            </i>
            <p>جایزه ها</p>
          </div>
          <p className="text-lowgray">۱۰٬۰۰۰ تومان</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-4">
        <a href="#" className="flex items-center">
          <span className="flex gap-1 items-center">
            <BagHeader />
            سفارش های من
          </span>
        </a>
        <a href="#" className="flex items-center">
          <span className="flex gap-1 items-center">
            <HeartHeader />
            علاقه مندی ها
          </span>
        </a>
        <a href="#" className="flex items-center">
          <span className="flex gap-1 items-center">
            <SettingHeader />
            تنظیمات
          </span>
        </a>
        <a href="#" className="flex items-center justify-between">
          <span className="flex gap-1 items-center">
            <ExitHeader />
            خروج
          </span>
        </a>
      </div>
    </div>
  );
}

export default Menu;
