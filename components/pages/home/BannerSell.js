function BannerSell() {
  return (
    <section
      id="#bannerseller"
      className="p-6 !py-0 mx-auto mt-12 max-w-screen-2xl lg:px-12 xl:px-24"
    >
      <div className="bg-banner-sell flex flex-col items-start justify-center gap-[24px] w-full pt-[24px] pb-[35px] px-[56px] rounded-[16px]">
        <p className="text-[#F0EEF8] text-[24px] leading-[56px] font-bold">
          خرید پر طرفدارترین گیفت کارت های بازی در اینجا...{" "}
        </p>
        <button className="bg-[#F0EEF8] leading-[30px] rounded-[8px] py-[9px] px-[18px] text-[#786AC2] text-[16px] font-bold">
          مشاهده محصولات
        </button>
      </div>
    </section>
  );
}

export default BannerSell;
