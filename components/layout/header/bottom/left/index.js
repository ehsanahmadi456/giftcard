import Image from "next/image";
import Menu from "./Menu";

import ArrowBottomHeader from "@/public/assets/icons/ArrowBottomHeader";
import ProfileHeader from "@/public/assets/icons/ProfileHeader";
import ShopHeader from "@/public/assets/icons/ShopHeader";
import Rial from "@/public/assets/images/rial.png";
import Xbox from "@/public/assets/images/xbox.png";

function Left() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative group">
        <a
          href="#"
          className="flex items-center justify-center gap-2 p-2 px-4 text-xs font-medium transition-colors duration-300 ease-linear rounded-lg text-lowgray group-hover:bg-gray-200"
        >
          <Image src={Rial} className="w-5 h-5 rounded-full" alt="rial" />
          قیمت ها به ریال
          <ArrowBottomHeader />
        </a>
        <div className="flex-col gap-4 justify-center p-4 bg-white absolute z-50 left-0 w-40` text-xs hidden group-hover:flex">
          <span>قیمت ها به ریال</span>
          <span>قیمت ها به ریال</span>
        </div>
      </div>
      <div className="relative group">
        <a
          href="#"
          className="flex items-center justify-center gap-1 p-2 px-4 text-xs font-medium transition-all duration-300 ease-linear bg-gray-100 rounded-lg group text-primary group-hover:bg-primary group-hover:text-white"
        >
          <ProfileHeader />
          ورود | ثبت نام
        </a>
        <Menu />
      </div>
      <div className="relative group">
        <a
          href="#"
          className="flex items-center justify-center gap-1 p-2 px-4 text-xs font-medium transition-colors duration-300 ease-linear rounded-lg text-lowgray group-hover:bg-gray-200"
        >
          <ShopHeader />
          سبد خرید
        </a>
        <div className="flex-col p-4 bg-white absolute z-50 left-0 w-64 text-xs hidden group-hover:flex">
          <article className="flex flex-col gap-4 relative border-b pb-4">
            <div className="flex items-center gap-2 font-medium">
              <Image src={Xbox} alt="" className="w-8 h-8 rounded-md" />
              گیفت کارت ایکس باکس
            </div>
            <div className="flex justify-between items-center">
              <div className="flex border-[1px] rounded-md max-w-max">
                <span className="p-2 px-3 border-l-[1px] cursor-pointer">
                  +
                </span>
                <span className="p-2 px-3 border-l-[1px]">2</span>
                <span className="p-2 px-3 cursor-pointer">-</span>
              </div>
              <span>۴۳۶٬۵۰۰ تومان</span>
            </div>
          </article>
          <div className="flex justify-between items-center pt-4">
            <a
              href="#"
              className="p-2 bg-primary text-white font-medium rounded-md w-max hover:bg-[#6352B8] transition-all duration-300 ease-linear"
            >
              ادامه فرآیند خرید
            </a>
            <span> ۴۳۶٬۵۰۰ تومان </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
