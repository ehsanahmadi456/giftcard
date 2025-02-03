import SearchHeader from "@/public/assets/icons/SearchHeader";
import Buttons from "./Buttons";

function Top() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-between w-full lg:w-3/5 xl:w-4/6 lg:justify-start lg:gap-4">
        <div className="flex items-center justify-center gap-1">
          <span className="rounded-full w-7 h-7 bg-primary"></span>
          <a href="#" className="text-xl font-bold">
            گیفت کارت
          </a>
        </div>
        <div className="flex items-center lg:w-4/6 xl:w-3/4 lg:border lg:rounded lg:p-2 gap-2 max-w-lg border-[#D8D8D8]">
          <SearchHeader />
          <input
            className="hidden bg-transparent outline-none lg:block placeholder:text-sm placeholder:text-lowgray"
            type="text"
            placeholder="جستجوی محصول..."
          />
        </div>
      </div>
      <Buttons />
      {/* <div className="hidden gap-4 lg:flex">
        <span className="flex items-center justify-center gap-1 text-sm text-lowgray">
          <TelegramHeader />
          پشتیبانی تلگرام: ۰۹۱۲۳۱۷۹۰۶۰
        </span>
        <span className="flex items-center justify-center gap-1 text-sm text-lowgray">
          <MobileHeader />
          تلفن پشتیبانی: ۹۰۰۰۰۲۰۰
        </span>
      </div> */}
    </div>
  );
}

export default Top;
