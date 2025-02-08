function BannerSell() {
  return (
    <section
      id="#bannerseller"
      className="p-6 !py-0 mx-auto mt-0 md:mt-4 lg:mt-12 max-w-screen-2xl lg:px-12 xl:px-24"
    >
      <div className="bg-banner-sell flex flex-col items-start justify-center gap-[8px] md:gap-[16px] lg:gap-[24px] w-full pt-[16px] md:pt-[20px] lg:pt-[24px] pb-[24px] md:pb-[29px] lg:pb-[35px] px-[12px] sm:px-[26px] md:px-[40px] lg:px-[56px] rounded-[16px]">
        <p className="text-[#F0EEF8] text-[14px] md:text-[19px] lg:text-[24px] leading-[32px] md:leading-[44px] lg:leading-[56px] font-bold">
          خرید پر طرفدارترین گیفت کارت های <br />
          بازی در اینجا...{" "}
        </p>
        <button className="bg-[#F0EEF8] leading-[22px] md:leading-[26px] lg:leading-[30px] rounded-[8px] py-[8.5px] md:py-[9px] px-[8px] md:px-[13px] lg:px-[18px] text-[#786AC2] text-[12px] md:text-[14px] lg:text-[16px] font-bold">
          مشاهده محصولات
        </button>
      </div>
    </section>
  );
}

export default BannerSell;
