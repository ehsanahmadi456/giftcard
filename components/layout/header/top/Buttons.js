import ShopHeader from "@/public/assets/icons/ShopHeader";
import Xbox from "@/public/assets/images/xbox.png";
import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";

function Buttons() {
  return (
    <div className="hidden gap-4 lg:flex">
      <div className="relative group">
        <Link
          href="/login"
          className="flex items-center justify-center gap-1 p-2 px-4 text-xs font-medium transition-all duration-300 ease-linear bg-gray-100 rounded-lg group text-primary group-hover:bg-primary group-hover:text-white"
        >
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="transition-all duration-300 ease-linear fill-primary group-hover:fill-white"
            >
              <path d="M12.1596 11.62C12.1296 11.62 12.1096 11.62 12.0796 11.62C12.0296 11.61 11.9596 11.61 11.8996 11.62C8.99957 11.53 6.80957 9.25 6.80957 6.44C6.80957 3.58 9.13957 1.25 11.9996 1.25C14.8596 1.25 17.1896 3.58 17.1896 6.44C17.1796 9.25 14.9796 11.53 12.1896 11.62C12.1796 11.62 12.1696 11.62 12.1596 11.62ZM11.9996 2.75C9.96957 2.75 8.30957 4.41 8.30957 6.44C8.30957 8.44 9.86957 10.05 11.8596 10.12C11.9096 10.11 12.0496 10.11 12.1796 10.12C14.1396 10.03 15.6796 8.42 15.6896 6.44C15.6896 4.41 14.0296 2.75 11.9996 2.75Z" />
              <path d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z" />
            </svg>
          </i>
          ورود | ثبت نام
        </Link>
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

export default Buttons;
