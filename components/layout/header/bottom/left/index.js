import ArrowBottomHeader from "@/public/assets/icons/ArrowBottomHeader";

function Left() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative group">
        <a
          href="#"
          className="flex items-center justify-center gap-2 p-2 px-4 text-base font-normal transition-colors duration-300 ease-linear rounded-lg text-[#495057] group-hover:bg-gray-200"
        >
          تومان / آمریکا
          <ArrowBottomHeader />
        </a>
        <div className="flex-col gap-4 justify-center p-4 bg-white absolute z-50 left-0 w-40` text-xs hidden group-hover:flex">
          <span>قیمت ها به ریال</span>
          <span>قیمت ها به ریال</span>
        </div>
      </div>
    </div>
  );
}

export default Left;
