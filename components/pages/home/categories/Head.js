import ArrowLeftS from "@/public/assets/icons/ArrowLeftS";
import ArrowRightS from "@/public/assets/icons/ArrowRightS";

function Head({ swiperRef }) {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-[#2F2F2F] text-[16px] md:text-[20px] lg:text-[24px] font-bold">
        دسته بندی ها
      </p>
      <div className="hidden lg:flex items-center justify-end gap-[16px]">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-[8px] bg-[#FFF] rounded-full border border-solid border-[#EEF3F6]"
        >
          <ArrowRightS />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-[8px] bg-[#FFF] rounded-full border border-solid border-[#EEF3F6]"
        >
          <ArrowLeftS />
        </button>
      </div>
    </div>
  );
}

export default Head;
